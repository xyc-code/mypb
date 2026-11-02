import avicit.platform6.bpm.api.listener.EventListener;
import avicit.platform6.bpm.api.listener.EventListenerExecution;

/** Local acceptance fixture; deliberately fails one test task and is never deployed. */
public class BpmBatchFixtureFailure implements EventListener {
    public void notify(EventListenerExecution execution) throws Exception {
        throw new IllegalStateException("BPM_BATCH_TEST_EXPECTED_FAILURE");
    }
}
