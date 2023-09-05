import style from "./style.module.css"
function ScrollIndicator() {
	return (
		<div class={style.scroll_indicator_container}>
			<div class={style.scroll_indicator_dot}></div>
			
		</div>
	);
}

export default ScrollIndicator;
