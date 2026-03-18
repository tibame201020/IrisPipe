export function minimalPipelineYaml() {
  return `- jobName: playwright_job
  executions:
    - type: EXECUTE
      sql: truncate table test_dest
    - type: INSERT
      name: playwright_insert
      sql: select * from test_source where update_time > :_LAST_UPDATE order by update_time asc
      destTable: test_dest
      watermarkColumn: UPDATE_TIME
      parameters:
        - param: _LAST_UPDATE
          type: timestamp
          value: '1970-01-01 00:00:00'
  setting:
    fetchSize: 100
    batchSize: 100
    atomicLevel: JOB
  database:
    source:
      driver: org.h2.Driver
      url: jdbc:h2:./h2data/data
      username: sa
      password: "sa"
    dest:
      driver: org.h2.Driver
      url: jdbc:h2:./h2data/data
      username: sa
      password: "sa"
`;
}
