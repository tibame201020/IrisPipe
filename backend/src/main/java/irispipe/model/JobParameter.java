package irispipe.model;

public record JobParameter(
        String param,
        Object value,
        SupportType type) {
    public Object getRenderedValue() {
        if (null == type) {
            return SupportType.general.renderClass(value);
        }
        return type.renderClass(value);
    }
}
