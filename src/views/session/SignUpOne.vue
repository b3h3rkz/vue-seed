<template>
  <div class="login-flex">
	 <div class="login">
		  <h3 style="padding: 0px 0px; margin-bottom: 25px; margin-top: 30px; font-size: 25px; font-weight: bold"> Bitnob Signup</h3>
		 <v-card class="login-card">
			 <p class="login-msg">Sign up for a <strong> Bitnob </strong> account</p>
			 <v-text-field 
			    prepend-icon="person"
					label="First Name" 
					required
					v-model="user.first_name"
					:rules="nameRules"
				></v-text-field>
				<v-text-field 
			    prepend-icon="person"
					label="Last Name" 
					required
					v-model="user.last_name"
					:rules="nameRules"
				></v-text-field>
				<v-text-field 
			    prepend-icon="email"
					label="Email" 
					required
					v-model="user.email"
				></v-text-field>
				<v-select 
			    prepend-icon="flag"
					label="Country" 
					required
					item-value="id"
          item-text="name"
					v-model="user.country"
					:rules="[v => !!v || 'Country is required']"
				></v-select>
				<v-text-field
				  prepend-icon="lock" 
					label="Password" 
				  type="password"
					required
					v-model="user.password1"
					:rules="passwordRules"
				></v-text-field>
				<small><input type="checkbox" style="width: 10px; height: 10px; padding: 0px 0px !important; margin-top: 0px !important"> &nbsp; I Agree to Follow Terms and Privacy Policy</small>
				<v-btn block class="login-btn"  @click="submit">Sign up<v-icon>check</v-icon> </v-btn>
		 </v-card>	
			<center>Already have an account? <router-link to="/session/login" class="f-link"><h3>Sign In</h3></router-link></center>
	 </div>	
 </div>
	<!--<div class="session-wrapper">
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
					<h2 class="mb-3">{{$t('message.signUp')}}</h2>
					<p class="fs-14">{{$t('message.havingAnAccount')}}
						<router-link to="/session/login">{{$t('message.login')}}</router-link>
					</p>
					<v-form v-model="valid" class="mb-4">
						<v-text-field 
							label="Username" 
							v-model="name" 
							:rules="nameRules" 
							:counter="20" 
							required
						></v-text-field>
						<v-text-field 
							label="E-mail ID" 
							v-model="email" 
							:rules="emailRules" 
							required
						></v-text-field>
						<v-text-field 
							label="Password" 
							v-model="password" 
							:rules="passwordRules" 
							type="password" 
							required
						></v-text-field>
						<v-btn large @click="submit" block color="primary" class="mb-3">{{$t('message.signUp')}}</v-btn>
						<p>{{$t('message.bySigningUpYouAgreeTo')}} {{brand}}</p>
						<router-link to="">{{$t('message.termsOfService')}}</router-link>
					</v-form>
					<div class="session-social-links d-inline-block">
						<ul class="list-inline">
							<li @click="signInWithFacebook">
								<span class="facebook-bg session-icon">
									<i class="ti-facebook"></i>
								</span>
							</li>
							<li @click="signInWithGoogle">
								<span class="google-bg session-icon">
									<i class="ti-google"></i>
								</span>
							</li>
							<li @click="signInWithTwitter">
								<span class="twitter-bg session-icon">
									<i class="ti-twitter-alt"></i>
								</span>
							</li>
							<li @click="signInWithGithub">
								<span class="github-bg session-icon">
									<i class="ti-github"></i>
								</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>-->
</template>

<script>
import SessionSliderWidget from "Components/Widgets/SessionSlider";
import AppConfig from "Constants/AppConfig";
import axiosQueries from "../../axiosQueries";

export default {
  components: {
    SessionSliderWidget
  },
  data() {
    return {
			valid: false,
			error: false,
      success: false,
      errorMsg: null,
      successMsg: null,
      user: {
        first_name: "",
        last_name: "",
        country: "",
        username: "",
        email: "",
        password1: ""
      },
      name: "",
      nameRules: [
        v => !!v || "Name is required",
        v => v.length <= 20 || "Name must be less than 20 characters"
      ],
      email: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v =>
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          "E-mail must be valid"
      ],
      password: "",
      passwordRules: [v => !!v || "Password is required"],
      appLogo: AppConfig.appLogo2,
      brand: AppConfig.brand,
			countries: []
    };
  },
	 created() {
    axiosQueries.getWithHeader('admin/countries/', this.$store.state.auth.token)
      .then((res) => {
         res.data.map((data)=>{
           this.countries.push(data);
         });
      })
      .catch((e) => {
        console.log('Country error', e);
      });
  },
  methods: {
    submit() {
      if (this.valid) {
        // add password2 object key
        this.user.password2 = this.user.password1;
        axiosQueries.postWithHeader('rest-auth/registration/', this.user, this.$store.state.auth.token)
			  .then(res => {
					if(res.status == 201) {
            this.error = false;
            this.success = true;
            this.successMsg = 'User has been added successfully';

            this.user = {};
          }else {

          }
				})
				.catch(e => {
          console.log('error', e);
          this.success = false;
          this.error = true;
          this.errorMsg = e.message;	
				});
      }
		},
		
  }
};
</script>
<style scoped>
:root {
	--background-color: #475069;
}
.login-flex {
	display: flex;
	height: 100%;
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
	padding: 20px 30px;
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