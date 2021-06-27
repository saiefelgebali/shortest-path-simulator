import SidebarContainer from "./components/SidebarContainer/SidebarContainer";
import MenubarContainer from "./components/MenubarContainer/MenubarContainer";
import DiagramView from "./components/DiagramView/DiagramView";
import styles from "./App.module.scss";

function App() {
	return (
		<div className={styles.appLayout}>
			<MenubarContainer></MenubarContainer>
			<SidebarContainer></SidebarContainer>
			<DiagramView />
			<SidebarContainer></SidebarContainer>
		</div>
	);
}

export default App;
