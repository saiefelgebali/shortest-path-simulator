import SidebarContainer from "./components/Sidebar/SidebarContainer/SidebarContainer";
import MenubarContainer from "./components/Menu/MenubarContainer/MenubarContainer";
import Diagram from "./components/Diagram/Diagram/Diagram";
import styles from "./App.module.scss";
import SidebarPrimary from "./components/Sidebar/SidebarPrimary/SidebarPrimary";

function App() {
	return (
		<div className={styles.appLayout}>
			<MenubarContainer></MenubarContainer>
			<SidebarPrimary />
			<Diagram />
			<SidebarContainer></SidebarContainer>
		</div>
	);
}

export default App;
