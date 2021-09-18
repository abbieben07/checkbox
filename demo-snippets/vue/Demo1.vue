<template>
	<Page>
		<ActionBar>
			<NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="$navigateBack" />
			<Label text="Demo 1" />
		</ActionBar>

		<StackLayout>
			<FlexboxLayout>
				<Checkbox value="remember" v-model="remember1" @checkChange="remember1 = $event.value" />
				<Label text="Remember Me" />
				<Label :text="remember1 ? 'True' : 'False'" marginLeft="20" />
			</FlexboxLayout>

			<FlexboxLayout>
				<Radio value="remember" v-model="remember2" @checkChange="remember2 = $event.value" />
				<Label text="Remember Me" />
				<Label :text="remember2 ? 'True' : 'False'" marginLeft="20" />
			</FlexboxLayout>
		</StackLayout>
	</Page>
</template>

<script>
export default {
	data() {
		return {
			remember1: false,
			remember2: false
		};
	}
};
</script>

<style lang="scss" scoped></style>