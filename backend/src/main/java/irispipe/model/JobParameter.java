package irispipe.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

/**
 * Parameter value bound into one execution step.
 *
 * @param param parameter name
 * @param value raw parameter value
 * @param type support type used to coerce the value
 */
public record JobParameter(
        String param,
        Object value,
        SupportType type) {
    /**
     * Returns the runtime-rendered parameter value.
     *
     * @return coerced parameter value
     */
    @JsonIgnore
    public Object getRenderedValue() {
        if (null == type) {
            return SupportType.general.renderClass(value);
        }
        return type.renderClass(value);
    }
}
