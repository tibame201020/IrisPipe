package irispipe.core.utility;

import java.sql.DatabaseMetaData;
import java.sql.SQLException;

/**
 * Defines identifier quoting and normalization behavior for one database dialect.
 */
public interface SqlDialect {
    /**
     * Quotes one identifier for SQL generation.
     *
     * @param identifier raw identifier
     * @return quoted identifier
     */
    String quoteIdentifier(String identifier);

    /**
     * Normalizes one identifier according to database metadata case rules.
     *
     * @param identifier raw identifier
     * @return normalized identifier
     */
    String normalizeIdentifier(String identifier);

    /**
     * Resolves a dialect implementation from JDBC metadata.
     *
     * @param metaData JDBC metadata
     * @return matching SQL dialect
     * @throws SQLException when JDBC metadata access fails
     */
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

    /**
     * Dialect for databases that store identifiers in upper case.
     */
    class UpperCaseDialect implements SqlDialect {
        private final String quote;

        /**
         * Creates the upper-case dialect.
         *
         * @param quote identifier quote string
         */
        public UpperCaseDialect(String quote) {
            this.quote = quote;
        }

        /**
         * {@inheritDoc}
         */
        @Override
        public String quoteIdentifier(String identifier) {
            return quote + identifier + quote;
        }

        /**
         * {@inheritDoc}
         */
        @Override
        public String normalizeIdentifier(String identifier) {
            return identifier == null ? null : identifier.toUpperCase();
        }
    }

    /**
     * Dialect for databases that store identifiers in lower case.
     */
    class LowerCaseDialect implements SqlDialect {
        private final String quote;

        /**
         * Creates the lower-case dialect.
         *
         * @param quote identifier quote string
         */
        public LowerCaseDialect(String quote) {
            this.quote = quote;
        }

        /**
         * {@inheritDoc}
         */
        @Override
        public String quoteIdentifier(String identifier) {
            return quote + identifier + quote;
        }

        /**
         * {@inheritDoc}
         */
        @Override
        public String normalizeIdentifier(String identifier) {
            return identifier == null ? null : identifier.toLowerCase();
        }
    }

    /**
     * Dialect for databases that preserve mixed-case identifiers.
     */
    class MixedCaseDialect implements SqlDialect {
        private final String quote;

        /**
         * Creates the mixed-case dialect.
         *
         * @param quote identifier quote string
         */
        public MixedCaseDialect(String quote) {
            this.quote = quote;
        }

        /**
         * {@inheritDoc}
         */
        @Override
        public String quoteIdentifier(String identifier) {
            return quote + identifier + quote;
        }

        /**
         * {@inheritDoc}
         */
        @Override
        public String normalizeIdentifier(String identifier) {
            return identifier;
        }
    }
}
