package irispipe.model;

import java.sql.Timestamp;

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

    public abstract Object renderClass(Object val);
}
