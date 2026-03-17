package irispipe.model;

import java.sql.Timestamp;

/**
 * Supported parameter coercion strategies.
 */
public enum SupportType {
    general {
        @Override
        public Object renderClass(Object val) {
            return val;
        }
    },

    timestamp {
        @Override
        public Object renderClass(Object val) {
            return Timestamp.valueOf(val.toString());
        }
    };

    /**
     * Converts a raw parameter value into the runtime type required by the
     * execution step.
     *
     * @param val raw parameter value
     * @return coerced runtime value
     */
    public abstract Object renderClass(Object val);
}
