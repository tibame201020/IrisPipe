import { useEffect, useMemo, useRef, useState } from 'react'

type ImportFormatValue = '' | 'json' | 'yaml' | 'yml'

interface PipelineImportDialogProps {
  open: boolean
  title: string
  description: string
  submitLabel: string
  initialPipelineName: string
  submitting: boolean
  error?: string | null
  onClose: () => void
  onSubmit: (payload: { pipelineName: string; file: File; format?: string }) => Promise<void>
}

export function PipelineImportDialog({
  open,
  title,
  description,
  submitLabel,
  initialPipelineName,
  submitting,
  error,
  onClose,
  onSubmit,
}: PipelineImportDialogProps) {
  const fileInputRef = useRef<HTMLInputElement | null>(null)
  const [pipelineName, setPipelineName] = useState(initialPipelineName)
  const [format, setFormat] = useState<ImportFormatValue>('')
  const [file, setFile] = useState<File | null>(null)
  const [localError, setLocalError] = useState<string | null>(null)

  useEffect(() => {
    if (!open) return
    setPipelineName(initialPipelineName)
    setFormat('')
    setFile(null)
    setLocalError(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }, [initialPipelineName, open])

  const resolvedError = localError ?? error ?? null
  const selectedFileLabel = useMemo(() => file?.name ?? 'No file selected', [file])

  function inferPipelineName(nextFile: File) {
    const dotIndex = nextFile.name.lastIndexOf('.')
    return dotIndex > 0 ? nextFile.name.slice(0, dotIndex) : nextFile.name
  }

  async function handleSubmit() {
    const nextPipelineName = pipelineName.trim()
    if (!nextPipelineName) {
      setLocalError('Pipeline name can not be blank')
      return
    }

    if (!file) {
      setLocalError('Select a JSON or YAML config file')
      return
    }

    setLocalError(null)
    await onSubmit({
      pipelineName: nextPipelineName,
      file,
      format: format || undefined,
    })
  }

  if (!open) return null

  return (
    <dialog open className="modal modal-open">
      <div className="modal-box max-w-xl p-0 overflow-hidden border border-base-300 shadow-2xl">
        <div className="bg-base-200 px-6 py-4 border-b border-base-300">
          <h3 className="text-sm font-bold uppercase tracking-widest opacity-50">{title}</h3>
        </div>

        <div className="p-6">
          <p className="text-sm leading-relaxed text-base-content/65">{description}</p>

          <div className="mt-5 space-y-4">
            <label className="form-control">
              <span className="mb-2 text-[11px] font-black uppercase tracking-[0.18em] text-base-content/35">
                Pipeline Name
              </span>
              <input
                type="text"
                className="input input-bordered w-full"
                value={pipelineName}
                onChange={(event) => setPipelineName(event.target.value)}
                autoFocus
              />
            </label>

            <label className="form-control">
              <span className="mb-2 text-[11px] font-black uppercase tracking-[0.18em] text-base-content/35">
                Config File
              </span>
              <input
                ref={fileInputRef}
                type="file"
                className="file-input file-input-bordered w-full"
                accept=".json,.yaml,.yml,application/json,application/x-yaml,text/yaml,text/x-yaml"
                onChange={(event) => {
                  const nextFile = event.target.files?.[0] ?? null
                  setFile(nextFile)
                  setLocalError(null)
                  if (nextFile && !pipelineName.trim()) {
                    setPipelineName(inferPipelineName(nextFile))
                  }
                }}
              />
              <span className="mt-2 text-xs text-base-content/45">{selectedFileLabel}</span>
            </label>

            <label className="form-control">
              <span className="mb-2 text-[11px] font-black uppercase tracking-[0.18em] text-base-content/35">
                Format
              </span>
              <select
                className="select select-bordered w-full"
                value={format}
                onChange={(event) => setFormat(event.target.value as ImportFormatValue)}
              >
                <option value="">Auto detect</option>
                <option value="json">JSON</option>
                <option value="yaml">YAML</option>
                <option value="yml">YML</option>
              </select>
            </label>
          </div>

          {resolvedError ? <div className="alert alert-error mt-5 shadow-sm">{resolvedError}</div> : null}

          <div className="modal-action mt-8">
            <button type="button" className="btn btn-ghost" onClick={onClose}>
              Cancel
            </button>
            <button type="button" className="btn btn-primary px-8" disabled={submitting} onClick={() => void handleSubmit()}>
              {submitting ? 'Importing...' : submitLabel}
            </button>
          </div>
        </div>
      </div>

      <form method="dialog" className="modal-backdrop bg-base-300/60 backdrop-blur-sm">
        <button type="button" onClick={onClose}>
          close
        </button>
      </form>
    </dialog>
  )
}
