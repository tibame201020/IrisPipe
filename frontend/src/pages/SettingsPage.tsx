import { Check, Database, Palette, Pencil, Plus, Trash2, Waypoints, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useTheme } from '../state/theme'
import { availableThemes } from '../state/theme.constants'
import {
  createConnection,
  deleteConnection,
  getApiErrorMessage,
  getDriverPresets,
  testConnection,
  updateConnection,
  listConnections,
  type ConnectionDTO,
  type ConnectionUpsertRequest,
  type DriverPreset,
} from '../lib/api'

// Connections tab

function ConnectionsTab() {
  const [connections, setConnections] = useState<ConnectionDTO[]>([])
  const [presets, setPresets] = useState<DriverPreset[]>([])
  const [loading, setLoading] = useState(true)
  const [editingId, setEditingId] = useState<number | 'new' | null>(null)
  const [deleteTarget, setDeleteTarget] = useState<ConnectionDTO | null>(null)
  const [deleteSubmitting, setDeleteSubmitting] = useState(false)
  const [actionError, setActionError] = useState<string | null>(null)

  useEffect(() => {
    Promise.all([listConnections(), getDriverPresets()])
      .then(([conns, ps]) => { setConnections(conns); setPresets(ps) })
      .finally(() => setLoading(false))
  }, [])

  async function reload() {
    const conns = await listConnections()
    setConnections(conns)
  }

  async function handleDelete() {
    if (!deleteTarget) return
    setDeleteSubmitting(true)
    setActionError(null)
    try {
      await deleteConnection(deleteTarget.id)
      setDeleteTarget(null)
      await reload()
    } catch (e) {
      setActionError(getApiErrorMessage(e))
    } finally {
      setDeleteSubmitting(false)
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-base-content/45">Connection Library</div>
          <div className="text-sm text-base-content/55 mt-0.5">Reusable JDBC connections for your pipelines</div>
        </div>
        <button type="button" className="btn btn-sm btn-primary gap-1.5" onClick={() => setEditingId('new')}>
          <Plus size={14} /> Add Connection
        </button>
      </div>

      {actionError ? <div className="alert alert-error text-sm">{actionError}</div> : null}

      {loading ? (
        <div className="flex justify-center py-8"><span className="loading loading-spinner loading-sm opacity-40" /></div>
      ) : connections.length === 0 ? (
        <div className="flex flex-col items-center gap-2 py-10 text-base-content/40">
          <Database size={32} className="opacity-30" />
          <div className="text-sm">No connections yet</div>
          <button type="button" className="btn btn-xs btn-ghost" onClick={() => setEditingId('new')}>Add your first connection</button>
        </div>
      ) : (
        <div className="iris-list-panel flex flex-col">
          {connections.map((conn) => (
            <div key={conn.id} className="iris-list-row flex items-center gap-3 px-4 py-3 bg-base-100 transition-colors">
              <Database size={14} className="opacity-40 shrink-0" />
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-sm truncate">{conn.name}</div>
                <div className="text-[11px] font-mono text-base-content/40 truncate">{conn.url}</div>
              </div>
              <div className="text-[10px] font-mono text-base-content/30 shrink-0">{conn.driver.split('.').pop()}</div>
              <button type="button" className="btn btn-xs btn-ghost btn-square" onClick={() => setEditingId(conn.id)}><Pencil size={12} /></button>
              <button type="button" className="btn btn-xs btn-ghost btn-square text-error/60" onClick={() => setDeleteTarget(conn)}><Trash2 size={12} /></button>
            </div>
          ))}
        </div>
      )}

      {editingId !== null && (
        <ConnectionFormModal
          id={editingId}
          existing={editingId !== 'new' ? connections.find((c) => c.id === editingId) : undefined}
          presets={presets}
          onClose={() => setEditingId(null)}
          onSaved={async () => { setEditingId(null); await reload() }}
        />
      )}

      {deleteTarget ? (
        <div className="iris-scrim fixed inset-0 z-50 flex items-center justify-center">
          <div className="mx-4 w-full max-w-md border border-base-300 bg-base-100 shadow-2xl">
            <div className="border-b border-error/20 bg-error/5 px-5 py-4">
              <div className="font-bold text-base text-error">Delete Connection</div>
            </div>
            <div className="space-y-3 px-5 py-5">
              <p className="text-sm text-base-content/70">
                Remove <span className="font-semibold text-base-content">{deleteTarget.name}</span> from the saved connection library.
              </p>
              <p className="text-xs text-base-content/50">
                This action removes the saved credential entry and does not preserve a rollback copy.
              </p>
            </div>
            <div className="flex items-center justify-end gap-2 border-t border-base-300 px-5 py-3">
              <button type="button" className="btn btn-sm btn-ghost" onClick={() => setDeleteTarget(null)}>
                Cancel
              </button>
              <button type="button" className="btn btn-sm btn-error" disabled={deleteSubmitting} onClick={() => void handleDelete()}>
                {deleteSubmitting ? <span className="loading loading-spinner loading-xs" /> : null}
                Delete
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}

function ConnectionFormModal({
  id,
  existing,
  presets,
  onClose,
  onSaved,
}: {
  id: number | 'new'
  existing?: ConnectionDTO
  presets: DriverPreset[]
  onClose: () => void
  onSaved: () => void
}) {
  const [form, setForm] = useState<ConnectionUpsertRequest>({
    name: existing?.name ?? '',
    driver: existing?.driver ?? '',
    url: existing?.url ?? '',
    username: existing?.username ?? '',
    password: '',
  })
  const [urlPlaceholders, setUrlPlaceholders] = useState<Record<string, string>>({})
  const [saving, setSaving] = useState(false)
  const [testState, setTestState] = useState<'idle' | 'loading' | 'ok' | 'fail'>('idle')
  const [testMsg, setTestMsg] = useState('')
  const [error, setError] = useState('')
  const [confirmBlankPassword, setConfirmBlankPassword] = useState(false)

  const selectedPreset = presets.find((p) => p.driverClass === form.driver) ?? null
  const editingExisting = id !== 'new'
  const blankPasswordOverwrite = editingExisting && form.password.trim().length === 0
  const canSave = Boolean(form.name && form.driver && form.url && (!blankPasswordOverwrite || confirmBlankPassword))

  function buildUrl(template: string, values: Record<string, string>) {
    return template.replace(/\{(\w+)\}/g, (_, key) => values[key] ?? '')
  }

  function applyPreset(preset: DriverPreset) {
    const newPh: Record<string, string> = {}
    preset.urlPlaceholders.forEach((ph) => { newPh[ph.key] = ph.example })
    setUrlPlaceholders(newPh)
    setForm((f) => ({ ...f, driver: preset.driverClass, url: buildUrl(preset.urlTemplate, newPh) }))
  }

  function handlePlaceholderChange(key: string, value: string) {
    const next = { ...urlPlaceholders, [key]: value }
    setUrlPlaceholders(next)
    if (selectedPreset) setForm((f) => ({ ...f, url: buildUrl(selectedPreset.urlTemplate, next) }))
  }

  async function handleSave() {
    setSaving(true)
    setError('')
    try {
      if (id === 'new') await createConnection(form)
      else await updateConnection(id, form)
      onSaved()
    } catch (e) {
      setError(getApiErrorMessage(e))
    } finally {
      setSaving(false)
    }
  }

  async function handleTest() {
    setTestState('loading')
    setTestMsg('')
    try {
      const result = await testConnection({ driver: form.driver, url: form.url, username: form.username, password: form.password })
      setTestState(result.success ? 'ok' : 'fail')
      setTestMsg(result.message + (result.serverInfo ? ` | ${result.serverInfo}` : '') + (result.latencyMs != null ? ` (${result.latencyMs}ms)` : ''))
    } catch {
      setTestState('fail')
      setTestMsg('Request failed')
    }
  }

  return (
    <div className="iris-scrim fixed inset-0 z-50 flex items-center justify-center">
      <div className="bg-base-100 border border-base-300 shadow-2xl w-full max-w-lg mx-4 flex flex-col">
        <div className="flex items-center justify-between px-5 py-4 border-b border-base-300">
          <div className="font-bold text-base">{id === 'new' ? 'New Connection' : 'Edit Connection'}</div>
          <button type="button" className="btn btn-xs btn-ghost btn-square" onClick={onClose} aria-label="Close dialog"><X size={12} /></button>
        </div>
        <div className="flex flex-col gap-4 p-5 overflow-y-auto">
          {editingExisting ? (
            <div className={`alert ${blankPasswordOverwrite ? 'alert-warning' : 'alert-info'} text-sm`}>
              Backend updates save exactly the submitted password. Leaving this field empty will overwrite the stored password with blank.
            </div>
          ) : null}

          {/* Name */}
          <div className="form-control gap-1">
            <label className="text-[10px] font-black uppercase tracking-widest text-base-content/40">Name</label>
            <input type="text" className="input input-bordered input-sm w-full" placeholder="My Database" value={form.name} onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))} />
          </div>

          {/* Driver */}
          <div className="form-control gap-1">
            <label className="text-[10px] font-black uppercase tracking-widest text-base-content/40">Driver</label>
            <div className="flex gap-2">
              <select
                className="select select-bordered select-sm flex-1"
                value={selectedPreset?.driverClass ?? '__custom__'}
                onChange={(e) => {
                  const preset = presets.find((p) => p.driverClass === e.target.value)
                  if (preset) applyPreset(preset)
                  else setForm((f) => ({ ...f, driver: '', url: '' }))
                }}
              >
                <option value="__custom__">Custom</option>
                {presets.filter((p) => p.driverClass).map((p) => (
                  <option key={p.driverClass} value={p.driverClass}>{p.name}</option>
                ))}
              </select>
              {(!selectedPreset || selectedPreset.name === 'Custom') && (
                <input
                  type="text"
                  className="input input-bordered input-sm flex-1 font-mono"
                  placeholder="com.mysql.cj.jdbc.Driver"
                  value={form.driver}
                  onChange={(e) => setForm((f) => ({ ...f, driver: e.target.value }))}
                />
              )}
            </div>
          </div>

          {/* URL builder */}
          {selectedPreset && selectedPreset.name !== 'Custom' ? (
            <div className="form-control gap-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-base-content/40">Connection</label>
              <div className="flex flex-wrap gap-2">
                {selectedPreset.urlPlaceholders.map((ph) => (
                  <div key={ph.key} className="flex items-center gap-1 flex-1 min-w-[120px]">
                    <span className="text-[10px] font-semibold text-base-content/50 w-14 shrink-0">{ph.label}</span>
                    <input
                      type="text"
                      className="input input-bordered input-sm flex-1 font-mono text-sm"
                      placeholder={ph.example}
                      value={urlPlaceholders[ph.key] ?? ''}
                      onChange={(e) => handlePlaceholderChange(ph.key, e.target.value)}
                    />
                  </div>
                ))}
              </div>
              <div className="text-[10px] font-mono text-base-content/40 truncate bg-base-200/50 px-2 py-1 rounded" title={form.url}>
                {form.url || <span className="italic">URL preview</span>}
              </div>
            </div>
          ) : (
            <div className="form-control gap-1">
              <label className="text-[10px] font-black uppercase tracking-widest text-base-content/40">JDBC URL</label>
              <input type="text" className="input input-bordered input-sm w-full font-mono" placeholder="jdbc:mysql://localhost:3306/mydb" value={form.url} onChange={(e) => setForm((f) => ({ ...f, url: e.target.value }))} />
            </div>
          )}

          {/* User / Pass */}
          <div className="flex gap-3">
            <div className="form-control gap-1 flex-1">
              <label className="text-[10px] font-black uppercase tracking-widest text-base-content/40">Username</label>
              <input type="text" className="input input-bordered input-sm w-full" placeholder="root" value={form.username} onChange={(e) => setForm((f) => ({ ...f, username: e.target.value }))} />
            </div>
            <div className="form-control gap-1 flex-1">
              <label className="text-[10px] font-black uppercase tracking-widest text-base-content/40">
                Password {editingExisting ? '(required unless you intentionally blank it)' : ''}
              </label>
              <input
                type="password"
                className="input input-bordered input-sm w-full"
                placeholder={editingExisting ? 'Re-enter to keep or replace the stored password' : 'Enter password'}
                value={form.password}
                onChange={(e) => {
                  setForm((f) => ({ ...f, password: e.target.value }))
                  setConfirmBlankPassword(false)
                }}
              />
            </div>
          </div>

          {blankPasswordOverwrite ? (
            <label className="iris-inset-panel flex items-start gap-3 border-warning/25 bg-warning/10 px-3 py-3 text-sm text-base-content/75">
              <input
                type="checkbox"
                className="checkbox checkbox-warning checkbox-sm mt-0.5"
                checked={confirmBlankPassword}
                onChange={(e) => setConfirmBlankPassword(e.target.checked)}
              />
              <span>I intentionally want to save this connection with a blank password.</span>
            </label>
          ) : null}

          {/* Test */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="btn btn-sm btn-outline gap-1.5"
              disabled={testState === 'loading' || !form.driver || !form.url}
              onClick={handleTest}
            >
              {testState === 'loading' ? <span className="loading loading-spinner loading-xs" /> : <Waypoints size={13} />}
              Test Connection
            </button>
            {testMsg && <span className={`text-xs font-mono ${testState === 'ok' ? 'text-success' : 'text-error'}`}>{testMsg}</span>}
          </div>

          {error && <div className="alert alert-error text-xs py-2">{error}</div>}
        </div>
        <div className="flex items-center justify-end gap-2 px-5 py-3 border-t border-base-300">
          <button type="button" className="btn btn-sm btn-ghost" onClick={onClose}>Cancel</button>
          <button type="button" className="btn btn-sm btn-primary" disabled={saving || !canSave} onClick={handleSave}>
            {saving ? <span className="loading loading-spinner loading-xs" /> : null}
            Save
          </button>
        </div>
      </div>
    </div>
  )
}

// Settings page

type SettingsTab = 'appearance' | 'connections'

export function SettingsPage() {
  const { themeName, setThemeName } = useTheme()
  const [activeTab, setActiveTab] = useState<SettingsTab>('appearance')

  return (
    <div className="h-full overflow-y-auto">
      <div className="card rounded-none border-x-0 border-y border-base-300 bg-base-100 shadow-none">
        <div className="card-body gap-6 p-6">
          {/* Tab nav */}
          <div role="tablist" className="tabs tabs-bordered w-fit">
            <button
              type="button"
              role="tab"
              className={`tab gap-2 ${activeTab === 'appearance' ? 'tab-active' : ''}`}
              onClick={() => setActiveTab('appearance')}
            >
              <Palette size={14} /> Appearance
            </button>
            <button
              type="button"
              role="tab"
              className={`tab gap-2 ${activeTab === 'connections' ? 'tab-active' : ''}`}
              onClick={() => setActiveTab('connections')}
            >
              <Database size={14} /> Connections
            </button>
          </div>

          {activeTab === 'appearance' && (
            <>
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div className="space-y-1">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-base-content/45">Active theme</div>
                  <div className="flex items-center gap-3">
                    <div className="flex size-12 items-center justify-center rounded-md bg-primary/10 text-primary">
                      <Palette size={20} />
                    </div>
                    <div>
                      <div className="text-2xl font-semibold capitalize">{themeName}</div>
                      <div className="text-sm text-base-content/55">Applied immediately to the whole console</div>
                    </div>
                  </div>
                </div>
                <span className="text-xs font-mono uppercase tracking-[0.18em] text-base-content/45">
                  {availableThemes.length} themes
                </span>
              </div>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {availableThemes.map((theme) => {
                  const selected = theme === themeName
                  return (
                    <button
                      key={theme}
                      type="button"
                      onClick={() => setThemeName(theme)}
                      data-theme={theme}
                      className={`btn h-auto min-h-0 w-full justify-start border border-base-300 bg-base-100 px-3 py-3 normal-case shadow-none ${
                        selected ? 'border-primary bg-primary/5 text-primary hover:bg-primary/10' : 'hover:bg-base-200'
                      }`}
                    >
                      <div className="flex w-full items-start gap-3 text-left">
                        <div className="mt-0.5 flex gap-0.5">
                          <div className="h-6 w-1.5 rounded-sm bg-primary" />
                          <div className="h-6 w-1.5 rounded-sm bg-secondary" />
                          <div className="h-6 w-1.5 rounded-sm bg-accent" />
                          <div className="h-6 w-1.5 rounded-sm bg-neutral" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between gap-2">
                            <span className="truncate text-sm font-semibold capitalize">{theme}</span>
                            {selected ? <Check size={12} className="shrink-0" /> : null}
                          </div>
                          <div className="mt-1 text-[11px] uppercase tracking-[0.16em] text-base-content/45">DaisyUI preset</div>
                        </div>
                      </div>
                    </button>
                  )
                })}
              </div>
            </>
          )}

          {activeTab === 'connections' && <ConnectionsTab />}
        </div>
      </div>
    </div>
  )
}

