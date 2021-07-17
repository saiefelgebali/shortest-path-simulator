import MenubarContainer from "./components/Menu/MenubarContainer/MenubarContainer";
import Diagram from "./components/Diagram/Diagram/Diagram";
import styles from "./App.module.scss";
import SidebarPrimary from "./components/Sidebar/SidebarPrimary/SidebarPrimary";
import { GraphContextProvider } from "./graph/context/graphContext";
import SidebarSecondary from "./components/Sidebar/SidebarSecondary/SidebarSecondary";

function App() {
	return (
		<div className={styles.appLayout}>
			<MenubarContainer></MenubarContainer>
			<GraphContextProvider>
				<SidebarPrimary />
				<Diagram />
				<SidebarSecondary />
			</GraphContextProvider>
		</div>
	);
}

export default App;
