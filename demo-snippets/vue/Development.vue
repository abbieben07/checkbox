<template>
	<Page>
		<ActionBar>
			<NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="$navigateBack" />
			<Label text="Demo 1" />
		</ActionBar>

		<StackLayout>
			<FlexboxLayout>
				<Checkbox value="remember" v-model="r1" @checkedChange="r1 = $event.value" activeColor="yellow" />
				<Label text="Remember Me" />
			</FlexboxLayout>
			<Label :text="r1 ? 'True' : 'False'" marginLeft="20" />
		</StackLayout>
	</Page>
</template>

<script>
export default {
	data() {
		return {
			r1: true
		};
	}
};
</script>

<style lang="scss" scoped></style>