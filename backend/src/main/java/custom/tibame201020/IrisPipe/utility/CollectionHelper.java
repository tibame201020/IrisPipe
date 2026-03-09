package custom.tibame201020.IrisPipe.utility;

import java.util.ArrayList;
import java.util.List;

public class CollectionHelper {

    public static List<Object> flatternArray(Object[] params) {
        List<Object> flattenedList = new ArrayList<>();
        for (Object param : params) {
            if (param instanceof List<?> nestedParams) {
                flattenedList.addAll(flatternArray(nestedParams.toArray()));
            } else {
                flattenedList.add(param);
            }
        }
        return flattenedList;
    }

}
