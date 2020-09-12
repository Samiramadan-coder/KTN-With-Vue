<!-- AppHeader Template -->
<template>
	<header class='fixed-top'>
		<div class="container">
			<nav class="navbar navbar-expand-lg navbar-light">

			  <a class="navbar-brand" href="#">
			  	<img src="@/assets/little-cost-footer.png">
			  	<h2>Koton</h2>
			  </a>

			  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			    <span class="navbar-toggler-icon"></span>
			  </button>

			  <div class="collapse navbar-collapse" id="navbarSupportedContent">

			    <ul class="navbar-nav ml-auto">

			      <router-link to="/" tag='li' class="nav-item active">
			      	<a class="nav-link">Home <span class="sr-only">(current)</span></a>
			      </router-link>

			      <router-link to="/mens" tag='li' class="nav-item">
			      	<a class="nav-link">Men</a>
			      </router-link>

			      <router-link to="/womens" tag='li' class="nav-item">
			      	<a class="nav-link">Women</a>
			      </router-link>

			      <router-link to="/children" tag='li' class="nav-item">
			      	<a class="nav-link">Children</a>
			      </router-link>

			    </ul>

			  </div>

			  <button class="btn btn-nav">Buy Now</button>

			</nav>
		</div>
	</header>
</template>

<!-- App Script -->
<script>
	export default{
		name: 'Appheader'
	};
</script>

<!-- App Style -->
<style>
	header{
		background-color: #655af3;
	}
	.navbar{
		margin-bottom: 0;
	}
	.navbar-brand{
		display: flex !important;
		justify-content: center;
		align-items: center;
	}

	.navbar-brand img{
		margin-right: 5px;
		width: 36px
	}

	.navbar-brand h2{
		color: #fff;
	    font-weight: bold;
	    margin-bottom: 0;
	    position: relative;
	    left: 10px;
	    font-size: 30px;
	    top: 4px;
	    color: #3e3b3b;
	}

	.navbar-nav li{
		margin-right: 10px;
		font-size: 19px;
		font-weight: 400;
		padding: 0 10px;
		color: #fff;
	}

	.navbar-nav li a{
		color: #fff !important;
	}

	.btn.btn-nav{
	    background-color: #ffa84c;
	    padding: 10px 25px;
	    border-radius: 25px;
	    color: #fff;
	    box-shadow: 0px 5px 30px 0px #00000080;
	}

	/*Media Query*/
	@media screen and (max-width: 992px){
		.btn.btn-nav{
			display: none;
		}
	}

</style>
