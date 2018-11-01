<template>
  <div class="login-flex">
	 <div class="login">
		  <h3 style="padding: 0px 0px; margin-bottom: 40px; font-size: 25px; font-weight: bold"> Bitnob Forgot Password</h3>
		 <v-card class="login-card">
			 <p class="login-msg">Enter your email address below and we will send you instructions on how to change your password</p>
			 <v-text-field 
			    prepend-icon="email"
					label="Your Email" 
					v-model="email" 
					:rules="emailRules" 
					required
				></v-text-field>
				<v-btn block class="login-btn">Send &nbsp;&nbsp;<v-icon>send</v-icon> </v-btn>
		 </v-card>	
			<center>Return to &nbsp; &nbsp;<router-link to="/session/login" class="f-link"><h3>Sign In</h3></router-link></center>
	 </div>	
 </div>
<!--
  <div class="session-wrapper">
    <div class="session-left">
        <session-slider-widget></session-slider-widget>
    </div>
    <div class="session-right text-xs-center">
        <div class="session-table-cell">
        		<div class="session-content">
					<img 
						:src="appLogo"
						class="img-responsive mb-3" 
						width="78" 
						height="78" 
					/>
					<h2 class="mb-3">{{$t('message.forgotPassword')}}</h2>
					<p class="fs-14">{{$t('message.enterYourEmailToSendYouAResetLink')}}.</p>
					<v-form v-model="valid" class="mb-4">
							<v-text-field 
							label="E-mail ID" 
							v-model="email" 
							:rules="emailRules" 
							required
						></v-text-field>						
						<v-btn color="primary" block  to="/session/reset-password"	>Send Email</v-btn>
					</v-form>
					<div>
						<router-link to="/session/login">{{$t('message.backToSignIn')}}</router-link>
					</div>
				</div>
			</div>
		</div>
  </div>-->
</template>


<script>
import SessionSliderWidget from "Components/Widgets/SessionSlider";
import AppConfig from "Constants/AppConfig";

export default {
  components: {
    SessionSliderWidget
  },
  data() {
    return {
			email: '',
      valid: false,
			emailRules: [
        v => !!v || "E-mail is required",
        v =>
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          "E-mail must be valid"
      ],
      appLogo: AppConfig.appLogo2
    };
  }
};
</script>
<style scoped>
:root {
	--background-color: #475069;
}
.login-flex {
	display: flex;
	height: 100vh;
	background: var(--background-color);
	align-items: center;
	justify-content: center;
	color: white;
}
.login {
	width: 430px;
	padding: 10px !important;
}
.login-card {
	padding: 50px 30px;
}
.login-btn {
	margin-top: 10px;
	color: #475069;
}
.login-msg {
	color: #475069;
	font-size: 15px;
	font-kerning: unset;
	font-weight: 400;
	padding: 10px;
	
}
.f-link {
	color: white !important;
	margin-top: 15px;
}
</style>