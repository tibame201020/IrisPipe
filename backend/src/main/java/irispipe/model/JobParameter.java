package irispipe.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

public record JobParameter(
        String param,
        Object value,
        SupportType type) {
    @JsonIgnore
    public Object getRenderedValue() {
        if (null == type) {
            return SupportType.general.renderClass(value);
        }
        return type.renderClass(value);
    }
}
