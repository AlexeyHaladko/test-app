import styles from "./App.module.css"
import { withDisableMobileZoom } from './hooks/useDisableMobileZoom';
import { MainInfo, Video } from './components';
import { SelectPlanForm } from "./components/SelectPlanForm";

function App() {
    return (
        <main className={styles.container}>
            <Video/>
            <MainInfo/>
            <SelectPlanForm/>
        </main>
    )
}

const AppWithDisableMobileZoom = withDisableMobileZoom(App)
export default AppWithDisableMobileZoom;
