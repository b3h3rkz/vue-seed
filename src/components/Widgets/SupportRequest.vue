<!-- Support Request Widget -->
<template>
	<div class="support-widget">
		<doughnut-chart :height="150"></doughnut-chart>
		<ul class="list-unstyled">
			<li class="justify-space-between align-center">
				<p class="mb-0 content-title">{{$t('message.totalRequest')}}</p>
				<v-badge class="primary">250</v-badge>
				<v-btn icon>
					<v-icon class="grey--text">visibility</v-icon>
				</v-btn>
			</li>
			<li class="justify-space-between align-center">
				<p class="mb-0 content-title">{{$t('message.new')}}</p>
				<v-badge class="warning">25</v-badge>
				<v-btn icon>
					<v-icon class="grey--text">visibility</v-icon>
				</v-btn>
			</li>
			<li class="justify-space-between align-center">
				<p class="mb-0 content-title">{{$t('message.pending')}}</p>
				<v-badge class="error">125</v-badge>
				<v-btn icon>
					<v-icon class="grey--text">visibility</v-icon>
				</v-btn>
			</li>
		</ul>    
	</div>
</template>
<script>
import DoughnutChart from "../Charts/DoughnutChart";

export default {
  components: {
    DoughnutChart
  }
};
</script>
