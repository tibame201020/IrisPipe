package irispipe.core.utility;

import java.util.ArrayList;
import java.util.List;

/**
 * Provides small collection utility helpers used by the batch layer.
 */
public class CollectionHelper {

    /**
     * Flattens nested array and list values into one flat list.
     *
     * @param params source array that may contain nested lists
     * @return flattened list preserving encounter order
     */
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
