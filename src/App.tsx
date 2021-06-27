import SidebarContainer from "./components/Sidebar/SidebarContainer/SidebarContainer";
import MenubarContainer from "./components/Menu/MenubarContainer/MenubarContainer";
import Diagram from "./components/Diagram/Diagram/Diagram";
import styles from "./App.module.scss";

function App() {
	return (
		<div className={styles.appLayout}>
			<MenubarContainer></MenubarContainer>
			<SidebarContainer></SidebarContainer>
			<Diagram />
			<SidebarContainer></SidebarContainer>
		</div>
	);
}

export default App;
