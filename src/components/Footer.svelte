<script>
	import Icon from "svelte-awesome";
	import {
		linkedin,
		twitter,
		instagram,
		file,
		edit,
	} from "svelte-awesome/icons";
</script>

<style>
	* {
		margin: 0;
		padding: 0;
	}
	footer {
		position: fixed;
		bottom: 0;
		height: 70px;
		width: 100%;
	}
	.iconContainer {
		display: flex;
		width: 100vw;
		height: 100%;
		justify-content: space-evenly;
		align-items: center;
		transition: all 0.2s ease-in-out;
	}
	.iconContainer:hover {
		background: #e8eff3b7;
	}
	.iconStyles {
		transition: all 0.2s ease-in-out;
		color: #be025b;
	}
	.iconStyles:link :visited {
		color: #be025b;
	}
	.iconStyles:hover {
		transform: scale(2);

	}
</style>
<footer>
	<div class="iconContainer">
		<div class="iconStyles">
			<a href="https://www.linkedin.com/in/cooper-viktor/" target="_blank" class="iconStyles">
				<Icon data={linkedin} scale="2" label="linkedIn" />
			</a>
		</div>
		<div class="iconStyles">
			<a href="https://dev.to/coopercodes" target="_blank" class="iconStyles">
				<Icon data={edit} scale="2" label="blog" class="iconStyles"/>
			</a>
		</div>
		<div class="iconStyles">
			<a href="https://coopscodes.github.io/resume/" target="_blank" class="iconStyles">
				<Icon data={file} scale="1.6" label="resume" class="iconStyles"/>
			</a>
		</div>
		<div class="iconStyles">
			<a href="https://www.instagram.com/cooper.viktor/?hl=en" target="_blank" class="iconStyles">
				<Icon data={instagram} scale="2" label="instagram" class="iconStyles"/>
			</a>
		</div>
		<div class="iconStyles">
			<a href="https://twitter.com/CooperCodes" target="_blank" class="iconStyles">
				<Icon data={twitter} scale="2" label="twitter" class="iconStyles"/>
			</a>
		</div>

	</div>
</footer>
