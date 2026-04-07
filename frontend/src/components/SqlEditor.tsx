import { useEffect, useRef } from 'react'
import { basicSetup, EditorView } from 'codemirror'
import { sql } from '@codemirror/lang-sql'
import { EditorState } from '@codemirror/state'

interface SqlEditorProps {
  value: string
  onChange: (value: string) => void
  readOnly?: boolean
  minHeight?: string
}

/**
 * CodeMirror 6 SQL editor with syntax highlighting.
 * Syncs external value changes (e.g., switching steps) via a separate effect.
 */
export function SqlEditor({ value, onChange, readOnly = false, minHeight = '120px' }: SqlEditorProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const viewRef = useRef<EditorView | null>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const state = EditorState.create({
      doc: value,
      extensions: [
        basicSetup,
        sql(),
        EditorView.editable.of(!readOnly),
        EditorView.updateListener.of((update) => {
          if (update.docChanged) {
            onChange(update.state.doc.toString())
          }
        }),
        EditorView.theme({
          '&': { fontSize: '13px' },
          '.cm-scroller': { fontFamily: 'ui-monospace, monospace', minHeight },
        }),
      ],
    })

    const view = new EditorView({ state, parent: containerRef.current })
    viewRef.current = view

    return () => {
      view.destroy()
      viewRef.current = null
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Sync external value changes without recreating the editor
  useEffect(() => {
    const view = viewRef.current
    if (!view) return
    const current = view.state.doc.toString()
    if (current !== value) {
      view.dispatch({
        changes: { from: 0, to: view.state.doc.length, insert: value },
      })
    }
  }, [value])

  return (
    <div
      ref={containerRef}
      className="border border-base-300 rounded-lg overflow-hidden text-sm"
    />
  )
}
