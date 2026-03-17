package irispipe.model;

/**
 * Built-in execution variables backed by persisted watermark records.
 */
public enum SystemProvidedVariable {
    _LAST_WATERMARK,
    _LAST_START,
    _LAST_END,
    _LAST_UPDATE
}
