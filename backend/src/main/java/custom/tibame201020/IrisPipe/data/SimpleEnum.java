package custom.tibame201020.IrisPipe.data;

public interface SimpleEnum {
    enum GeneralStatus {Success, Fail}

    enum SystemProvideVariable {
        _LAST_WATERMARK,
        _LAST_START,
        _LAST_END,
        _LAST_UPDATE
    }

    enum SummaryInfoLayer {
        JOB, STEP
    }
}
