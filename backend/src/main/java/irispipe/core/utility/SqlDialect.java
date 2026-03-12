package irispipe.core.utility;

import java.sql.DatabaseMetaData;
import java.sql.SQLException;

public interface SqlDialect {
    String quoteIdentifier(String identifier);

    String normalizeIdentifier(String identifier);

    static SqlDialect fromMetaData(DatabaseMetaData metaData) throws SQLException {
        String quote = metaData.getIdentifierQuoteString();
        String identifierQuote = (quote == null || quote.trim().isEmpty()) ? "" : quote.trim();

        if (metaData.storesUpperCaseIdentifiers()) {
            return new UpperCaseDialect(identifierQuote);
        } else if (metaData.storesLowerCaseIdentifiers()) {
            return new LowerCaseDialect(identifierQuote);
        } else {
            return new MixedCaseDialect(identifierQuote);
        }
    }

    class UpperCaseDialect implements SqlDialect {
        private final String quote;

        public UpperCaseDialect(String quote) {
            this.quote = quote;
        }

        @Override
        public String quoteIdentifier(String identifier) {
            return quote + identifier + quote;
        }

        @Override
        public String normalizeIdentifier(String identifier) {
            return identifier == null ? null : identifier.toUpperCase();
        }
    }

    class LowerCaseDialect implements SqlDialect {
        private final String quote;

        public LowerCaseDialect(String quote) {
            this.quote = quote;
        }

        @Override
        public String quoteIdentifier(String identifier) {
            return quote + identifier + quote;
        }

        @Override
        public String normalizeIdentifier(String identifier) {
            return identifier == null ? null : identifier.toLowerCase();
        }
    }

    class MixedCaseDialect implements SqlDialect {
        private final String quote;

        public MixedCaseDialect(String quote) {
            this.quote = quote;
        }

        @Override
        public String quoteIdentifier(String identifier) {
            return quote + identifier + quote;
        }

        @Override
        public String normalizeIdentifier(String identifier) {
            return identifier;
        }
    }
}
