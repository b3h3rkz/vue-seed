<template>
	<div class="search-form-wrap">
		<v-btn fab dark small class="close-btn">
			<v-icon dark>close</v-icon>
		</v-btn>
		<div class="d-flex align-center justify-center centered">
			<v-form>
				<v-text-field 
					dark
					v-model="search"
					prepend-icon="search"
					placeholder="What are you looking for.."
					autocomplete="true"
					@click.stop="onClickSearch"
					color="white"
				>
				</v-text-field>
			</v-form>
		</div>
	</div>
</template>

<script>

export default {
  data() {
    return {
      search: ""
    };
  },
  mounted() {
    const mobSearchBtn = document.querySelector('.mobile-search-btn');
    mobSearchBtn.onclick = function(event) {
      event.stopPropagation();
      document.querySelector(".search-form-wrap").classList.add('search-slide');
    };
    document.querySelector(".close-btn").onclick = function(event) {
      event.stopPropagation();
      document.querySelector(".search-form-wrap").classList.remove('search-slide');
    };
    document.querySelector(".search-form-wrap").onclick =  function(event) {
      event.stopPropagation();
      document.querySelector(".search-form-wrap").classList.remove('search-slide');
    };
  },
  methods: {
    onClickSearch() {
      console.log("work");
    }
  }
};
</script>

