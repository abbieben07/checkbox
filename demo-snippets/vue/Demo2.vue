<template>
	<Page>
		<ActionBar>
			<NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="$navigateBack" />
			<Label text="Demo 2" />
		</ActionBar>

		<StackLayout>
			<FlexboxLayout>
				<RadioGroup v-model="form" @selectedChange="form = $event.value">
					<Radio value="4" />
					<Radio value="5" />
					<FlexboxLayout>
						<Radio value="1" activeColor="purple" inactiveColor="brown" class="test" />
						<Label text="1" />
					</FlexboxLayout>
					<FlexboxLayout>
						<Radio value="2" />
						<Label text="2" />

					</FlexboxLayout>
					<FlexboxLayout>
						<Radio value="3" />
						<Label text="3" />
					</FlexboxLayout>
				</RadioGroup> <Label :text="r2" marginLeft="50" />
			</FlexboxLayout>
		</StackLayout>
	</Page>
</template>

<script>
export default {
	data() {
		return {
			form: 1
		};
	}
};
</script>

<style lang="scss" scoped>
.test {
	active-color: pink;
	inactive-color: indigo;
}
</style>