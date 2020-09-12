<template>
  <div class="home">

  	<!-- Carousel -->
  	<div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">

  	  <!-- Inner Carousel -->
	  <div class="carousel-inner">

	    <div class="carousel-item active">
	      <img src="@/assets/slider01.jpeg" class="d-block w-100" alt="">
	    </div>

	    <div class="carousel-item">
	      <img src="@/assets/slider02.jpeg" class="d-block w-100" alt="">
	    </div>

	    <div class="carousel-item">
	      <img src="@/assets/slider03.jpeg" class="d-block w-100" alt="">
	    </div>
	  </div>

	  <!-- Carousel Caption -->
	  <div class="caption">
	  	<h4>Clothes Shop</h4>
	  	<h1>Koton Clothes for Men, Women <br/> and Children</h1>
	  	<p>We are Happy to Help you Finding your Favourite Clothes for you and for your Family</p>
	  	<button class="btn btn-buy">Buy Now</button>
	  	<button class="btn btn-offers">Offers</button>
	  </div>
	</div><!-- End Of Carousel -->

	<!-- Popular Section -->
	<div class="popular">
		<div class="container">

			<!-- Top Section -->
			<div class="top-section text-center">
				<!-- Heading -->
				<h2>Popular on Little Closet</h2>

				<!-- List Of Clothes Pages -->
				<ul class="list-unstyled">
					<router-link to="/" tag='li'>
			      		<a class="active">General</a>
				    </router-link>

				    <router-link to="/mens" tag='li'>
				      	<a>Mens</a>
				    </router-link>

				    <router-link to="/womens" tag='li'>
				      	<a>Womens</a>
				    </router-link>

				    <router-link to="/children" tag='li'>
				      	<a>Children</a>
				    </router-link>

				</ul>
			</div>

			<!-- Man Section -->
			<div class="row top-row">
				<div class="col-md-4">
					<div :class="{item: item, animateItem: animateItem}">
						<!-- Image Part -->
						<div class="img">
							<img src='@/assets/man/01.jpg' alt="Man Pic 1" />
						</div>
						<!-- Info Part -->
						<div class="info">
							<div class="top-info">
								<h6><a href="#">Cool Clothing with <br/> Brown Stripes</a></h6>
								<span>3$</span>
							</div>
							<div class="bottom-info">
								<button class="btn buy">Buy Now</button>
								<button class="btn details">Details</button>
							</div>
						</div>
					</div>
				</div>

				<div class="col-md-4">
					<div :class="{item: item, animateItem: animateItem}">
						<!-- Image Part -->
						<div class="img">
							<img src='@/assets/man/02.jpg' alt="Man Pic 1" />
						</div>
						<!-- Info Part -->
						<div class="info">
							<div class="top-info">
								<h6><a href="#">Cool Clothing with <br/> Brown Stripes</a></h6>
								<span>3$</span>
							</div>
							<div class="bottom-info">
								<button class="btn buy">Buy Now</button>
								<button class="btn details">Details</button>
							</div>
						</div>
					</div>
				</div>

				<div class="col-md-4">
					<div :class="{item: item, animateItem: animateItem}">
						<!-- Image Part -->
						<div class="img">
							<img src='@/assets/man/3.jpg' alt="Man Pic 1" />
						</div>
						<!-- Info Part -->
						<div class="info">
							<div class="top-info">
								<h6><a href="#">Cool Clothing with <br/> Brown Stripes</a></h6>
								<span>3$</span>
							</div>
							<div class="bottom-info">
								<button class="btn buy">Buy Now</button>
								<button class="btn details">Details</button>
							</div>
						</div>
					</div>
				</div>				
			</div>

			<div class="row">
				<div class="col-md-4">
					<div :class="{item: item, animateItemtwo: animateItemtwo}">
						<!-- Image Part -->
						<div class="img">
							<img src='@/assets/man/04.jpg' alt="Man Pic 1" />
						</div>
						<!-- Info Part -->
						<div class="info">
							<div class="top-info">
								<h6><a href="#">Cool Clothing with <br/> Brown Stripes</a></h6>
								<span>7$</span>
							</div>
							<div class="bottom-info">
								<button class="btn buy">Buy Now</button>
								<button class="btn details">Details</button>
							</div>
						</div>
					</div>
				</div>

				<div class="col-md-4">
					<div :class="{item: item, animateItemtwo: animateItemtwo}">
						<!-- Image Part -->
						<div class="img">
							<img src='@/assets/man/05.jpg' alt="Man Pic 1" />
						</div>
						<!-- Info Part -->
						<div class="info">
							<div class="top-info">
								<h6><a href="#">Cool Clothing with <br/> Brown Stripes</a></h6>
								<span>5$</span>
							</div>
							<div class="bottom-info">
								<button class="btn buy">Buy Now</button>
								<button class="btn details">Details</button>
							</div>
						</div>
					</div>
				</div>

				<div class="col-md-4">
					<div :class="{item: item, animateItemtwo: animateItemtwo}">
						<!-- Image Part -->
						<div class="img">
							<img src='@/assets/man/06.jpg' alt="Man Pic 1" />
						</div>
						<!-- Info Part -->
						<div class="info">
							<div class="top-info">
								<h6><a href="#">Cool Clothing with <br/> Brown Stripes</a></h6>
								<span>8$</span>
							</div>
							<div class="bottom-info">
								<button class="btn buy">Buy Now</button>
								<button class="btn details">Details</button>
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- Load More Button -->
			<div class='text-center button-cont'>
				<button class='btn'>Load More</button>
			</div>


		</div>
	</div><!-- End Of Popular -->

	<!-- Boxes Section -->
	<div class='boxes'>
		<div class='fluid-container'>
			<!-- Box Heading -->
			<div class="box-heading text-center">
				<h4>Latest Blog</h4>
				<p>Way is there to get clothing you’re sure <br/> to love than by making it your know</p>
			</div>

			<!-- List Of Boxes -->
			<div class="row box-row">
				
				<div class="col-md-3 col-sm-6">
					<div class="item">
						<!-- Overlay -->
						<div class="overlay"></div>

						<div class="item-content">

							<div class="top-item-content">
								<h4>Adventure</h4>
								<p>I see That The Fashion <br/> Wears out more <br/> apparel</p>
							</div>

							<div class="bottom-item-content">
								<span>01 March 2020</span>
								<h6>By Alexis Richards</h6>
							</div>

						</div>
					</div>
				</div>

				<div class="col-md-3 col-sm-6">
					<div class="item item-two">
						<!-- Overlay -->
						<div class="overlay"></div>

						<div class="item-content">

							<div class="top-item-content">
								<h4>Adventure</h4>
								<p>Gucci has design <br/> and contemporary lifestyle</p>
							</div>

							<div class="bottom-item-content">
								<span>01 March 2020</span>
								<h6>By Alexis Richards</h6>
							</div>

						</div>
					</div>
				</div>

				<div class="col-md-3 col-sm-6">
					<div class="item item-three">
						<!-- Overlay -->
						<div class="overlay"></div>

						<div class="item-content">

							<div class="top-item-content">
								<h4>Adventure</h4>
								<p>A fashion is nothing but <br/> an induced epidemic</p>
							</div>

							<div class="bottom-item-content">
								<span>01 March 2020</span>
								<h6>By Alexis Richards</h6>
							</div>

						</div>
					</div>
				</div>

				<div class="col-md-3 col-sm-6">
					<div class="item item-four">
						<!-- Overlay -->
						<div class="overlay"></div>

						<div class="item-content">

							<div class="top-item-content">
								<h4>Adventure</h4>
								<p>A designer is only as <br/> good as the star who <br /> wears</p>
							</div>

							<div class="bottom-item-content">
								<span>01 March 2020</span>
								<h6>By Alexis Richards</h6>
							</div>

						</div>
					</div>
				</div>

			</div>
			
		</div>
	</div><!-- End Of Boxes -->

	<!-- Offers Section -->
	<div class="offers">

		<div class="fluid-container">
			<div class="row">
				
				<div class="col-md-6">
					<div v-bind:class="{rightsectionanimate: rightsectionanimate, show: show}">
						<div class="row">
							<div class="col-md-12">
								<div class="top-left-offer">
									<div class="overlay"></div>
									<div class="content">
										<h4>Accessories <br/> Collection</h4>
										<a href="#">Shop Now</a>
									</div>
								</div>
							</div>

							<div class="col-md-6 left-offer">
								<div class="bottom-left-offer">
									<div class="overlay"></div>
									<div class="content">
										<h4>Mans <br/> Collection</h4>
										<a href="#">Shop Now</a>
									</div>
								</div>
							</div>

							<div class="col-md-6 right-offer">
								<div class="bottom-left-offer right-section">
									<div class="overlay"></div>
									<div class="content">
										<h4>Hurry</h4>
										<span>30% Off</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="col-md-6">
					<div :class="{leftsectionanimate: leftsectionanimate, show: show}">
						<div class="right-offer-collection">
							<div class="overlay"></div>
							<div class="content">
								<h4>Womens <br/> Collection</h4>
								<a href="#">Shop Now</a>
							</div>
						</div>
					</div>
				</div>

			</div>
		</div>		
	</div><!-- End Of Offers -->

	<!-- Our Features -->
	<div class="features">
		<div class="container">
			<div class="row">
				
				<div class="col-md-3 col-sm-6">
					<h6 class="text-uppercase text-center">FREE STANDARD SHIPPING</h6>
				</div>

				<div class="col-md-3 col-sm-6">
					<h6 class="text-uppercase text-center">100% MONEY BACK</h6>
				</div>

				<div class="col-md-3 col-sm-6">
					<h6 class="text-uppercase text-center">GIFTS FOR MEMBERS</h6>
				</div>

				<div class="col-md-3 col-sm-6">
					<h6 class="text-uppercase text-center">BUYER PROTECTION</h6>
				</div>

			</div>
		</div>
	</div>

	<!-- Instagram Fashion -->
	<div class="instagram">
		<div class="container">
			<div class="instagram-container">
				
				<div class="instagram-container-content">
					
				</div>

			</div>
		</div>
	</div>

  </div> <!-- End Of Home -->
</template>

<script>
// @ is an alias to /src

export default {
	  name: "Home",
	  data() {
	  	return {
	  		windowScroll: window.scrollY,
	  		animateItem: false,
	  		item: true,
	  		animateItemtwo: false,
	  		rightsectionanimate: true,
	  		show: false,
	  		leftsectionanimate: true
	  	}
	  },
	  methods: {
	  	getScroll: function () {
	  		this.windowScroll = window.top.scrollY;

	  		console.log(this.windowScroll);

	  		if(this.windowScroll >= 560 ) {
	  			this.animateItem = true;
	  		}
	  		if(this.windowScroll >= 1030) {
	  			this.animateItemtwo = true;
	  		}if(this.windowScroll >= 2600) {
	  			this.show = true;
	  		}
	  	}
	  },
	  mounted() {
	  		window.addEventListener('scroll', this.getScroll);
	  }
	};

</script>

<style scoped>

	*{
		overflow: hidden;
	}
	.home{
		margin-top: 62px;
	}	

	.home .carousel .carousel-inner{
		
		position: relative;
	}

	.home .carousel .carousel-inner .carousel-item img{
		height: 100%;
	}

	.home .caption{
		position: absolute;
		left: 50%;
		transform: translateX(-83%);
		top: 25%;
		z-index: 3;
		color: #fff;
		overflow: hidden;
	}

	.home .caption h4{
		font-weight: 200;
	    font-size: 20px;
	    text-transform: uppercase;
	    margin-bottom: 0px;
	    position: relative;
	    left: -100%;
	    animation: animatesmallheading 2s ease-in-out forwards;
	}

	.home .caption h1{
		margin-top: 10px;
    	font-size: 45px;
    	opacity: 0;
	    animation: animatemainheading 2s ease-in-out forwards;
	}

	.home .caption p{
	    font-weight: 300;
    	font-size: 18px;
    	opacity: 0;
	    animation: animateparaheading 1s ease-in-out forwards;
	    animation-delay: 2s;
	}

	.home .caption .btn-buy,
	.home .caption .btn-offers{
		background-color: #ffa84c;
	    padding: 10px 25px;
	    border-radius: 25px;
	    color: #000;
	    transition: all .5s ease-in-out;
	    border: 1px solid transparent;
	    margin-right: 10px;
        font-size: 15px;
    	font-weight: 500;
    	letter-spacing: 1px;
    	animation: animatebtn 2s ease-in-out forwards;
	}
	.home .caption .btn-offers{
		background-color: #1d1488;
		color: #fff;
	}
	.home .caption .btn-buy:hover,
	.home .caption .btn-offers:hover{
		background-color: transparent;
		color: #fff;
		border: 1px solid #fff;
	}


	@keyframes animatesmallheading{
		from{
			left: -100%;
		}
		to{
			left: 0;
		}
	}

	@keyframes animatemainheading{
		from{
			opacity: 0;
		}
		to{
			opacity: 1;
		}
	}

	@keyframes animateparaheading{
		from{
			opacity: 0;
		}
		to{
			opacity: 1;
		}
	}
	@keyframes animatebtn{
		from{
			opacity: 0;
		}
		to{
			opacity: 1;
		}
	}

	@media screen and (max-width: 992px){
		.home{
			margin-top: 60px;
		}

		.home .caption{
			top: 20%;
		}

		.home .caption h4{
			font-size: 16px;
		}

		.home .caption h1{
			font-size: 40px;
		}

		.home .caption p{
			font-size: 16px;
		}

		.home .caption .btn-buy,
		.home .caption .btn-offers{
			font-size: 14px;
			font-weight: 400;
		}
	}

	@media screen and (min-width: 575px) and (max-width: 767px){
		.home{
			margin-top: 60px;
		}

		.home .carousel .carousel-inner{
			
		}

		.home .caption{
			top: 15%;
		}

		.home .caption h4{
			font-size: 15px;
		}

		.home .caption h1{
			font-size: 30px;
		}

		.home .caption p{
			font-size: 15px;
		}

		.home .caption .btn-buy,
		.home .caption .btn-offers{
			font-size: 14px;
			font-weight: 400;
		}
	}

	@media screen and (max-width: 575px){
		.home{
			margin-top: 60px;
		}

		.home .caption{
			display: none;
		}

		.home .caption h4{
			font-size: 10px;
		}

		.home .caption h1{
			font-size: 22px;
			margin-bottom: 5px;
		}

		.home .caption p{
			font-size: 10px;
		}

		.home .caption .btn-buy,
		.home .caption .btn-offers{
			font-size: 10px;
			font-weight: 400;
			padding: 5px 10px;
		}
	}

	/**************************
	 ** Start Popular Section */
	.popular{
		padding: 80px 0 60px;
		background-color: #fff;
	}

	.popular .top-section{
		margin-bottom: 50px;
	}

	.popular .top-section h2{
		margin-bottom: 30px;
	    font-weight: bold;
	    color: #3e3b3b;
	    font-size: 35px;
	    letter-spacing: 1px;
	}

	.popular .top-section ul{
		margin-bottom: 0;
	    display: flex;
	    justify-content: center
	}

	.popular .top-section ul li{
		margin-right: 25px;
	}

	.popular .top-section ul li a{
		text-decoration: none;
	    color: #3e3b3b;
	    font-weight: bold
	}

	.popular .top-section ul li a.active,
	.popular .top-section ul li a:hover{
		color: #655af3;
	}

	.popular .top-row{
		margin-bottom: 80px;
	}

	.popular .item{
		padding: 0;
	    box-shadow: 0px 5px 15px -7px #00000080;
	    opacity: .3;
	    transform: scale(.7);
	    margin: 10px 0;

	}

	/* Start Popular Item Animation */
	.popular .item.animateItem{
		animation: animateItems 2s ease-in-out forwards;
	}

	.popular .item.animateItemtwo{
		animation: animateItems 2s ease-in-out forwards;
	}

	@keyframes animateItems{
		from{
			opacity: .3;
			transform: scale(.7);
		}
		to{
			opacity: 1;
			transform: none;
		}
	}

	/* End Popular Item Animation */

	.popular .item .img img{
		width: 100%;
	}

	.popular .item .info{
		background-color: #f5efef;
	}

	.popular .item .info .top-info{
		padding: 10px 20px;
	    margin-top: 2px;
	    display: flex;
	    justify-content: space-between;
	}

	.popular .item .info .top-info h6{
		margin-bottom: 0;
	}

	.popular .item .info .top-info h6 a{
		text-decoration: none;
	    color: #6b6565;
	    font-weight: 500;
	    font-size: 21px;
	}

	.popular .item .info .top-info span{
	    font-size: 40px;
	    display: block;
	    color: #655af3;
	}

	.popular .item .info .bottom-info button{
	    width: 50%;
	    border-radius: 0;
	    padding: 15px;
	    cursor: pointer;
	    transition: all .5s ease-in-out;
	}

	.popular .item .info .bottom-info button:focus{
		outline: 0;
		box-shadow: none;
	}

	.popular .item .info .bottom-info button.buy{
	}

	.popular .item .info .bottom-info button.buy:hover{
		background-color: #ffa84c;
		color: #fff;
	}

	.popular .item .info .bottom-info button.details:hover{
		background-color: #655af3;
		color: #fff;
	}

	/* Start Media Screen For Item */
	@media screen and (max-width: 767px) {
		.popular .top-row{
			margin-bottom: 0;
		}
		.popular .item{
			margin-bottom: 30px;
		}
	}
	/* End Media Screen For Item*/

	.popular .button-cont{
		margin-top: 80px;
	}

	.popular .button-cont button{
		background-color: #655af3;
	    padding: 10px 27px;
	    color: #fff;
	    font-weight: 700;
	    font-size: 17px;
	    border-radius: 27px;
	    border: 2px solid transparent;
	}

	.popular .button-cont button:focus{
		box-shadow: none;
	}

	.popular .button-cont button:hover{
		background-color: transparent;
		color: #655af3;
		border-color: #655af3;
	}

	/**************************
	 ** End Popular Section */


 	/**************************
 	** Start Boxes Section ***/

 	.home .boxes{
 		padding: 60px 0 80px;
 		background-color: #fff;
 	}
 	.home .boxes .box-heading{
 		margin-bottom: 50px;
 	}

 	.home .boxes .box-heading h4{
 		color: #3e3b3b;
	    font-weight: 600;
	    letter-spacing: 1px
 	}

 	.home .boxes .box-heading p{
        font-size: 14px;
	    font-weight: 500;
	    color: #6f6c6c
 	}

 	.home .boxes .box-row{
 		margin: 0 15px;
 	}
 	
 	.home .boxes .item{
 		position: relative;
 		height: 400px;
 		background: url(../assets/box/01.jpg);
 		background-size: cover;
 		background-position: center;
 		box-shadow: 0px 5px 15px -10px #00000080;
 		margin: 10px 0;
 		cursor: pointer;
 	}

 	.home .boxes .item .overlay{
 		position: absolute;
 		top: 0;
 		left: 0;
 		right: 0;
 		bottom: 0;
 		background-color: rgba(0,0,0,.2);
 		z-index: 1;
 		transition: all .3s ease-in-out
 	}

 	.home .boxes .item:hover .overlay{
 		background-color: rgba(0,0,0,.5);
 	}

 	.home .boxes .item.item-two{
 		background: url(../assets/box/02.jpg);
 	}

 	.home .boxes .item.item-three{
 		background: url(../assets/box/03.jpg);
 	}

 	.home .boxes .item.item-four{
 		background: url(../assets/box/04.jpg);
 	}

 	.home .boxes .item .item-content{
	    position: absolute;
	    bottom: 8%;
	    left: 50%;
	    transform: translateX(-50%);
        width: 80%;
        box-shadow: 0px 5px 10px 0px #a9a5a580;
        z-index: 2;
        transition: all .3s ease-in-out;
 	}

 	.home .boxes .item:hover .item-content{
 		bottom: 12%;
 	}

 	.home .boxes .item .item-content .top-item-content{
	    background: #655af3;
    	padding: 15px;
    	color: #fff;
    	text-align: center;
 	}

 	.home .boxes .item .item-content .top-item-content h4{
 		font-size: 13px;
	    font-weight: 500;
	    color: #443f3f;
	    text-transform: uppercase;
 	}

 	.home .boxes .item .item-content .top-item-content p{
	    margin: 0;
	    font-weight: 600;
	    word-spacing: 2px
 	}

 	.home .boxes .item .item-content .bottom-item-content{
 		padding: 15px;
	    background: #ffa84c;
	    text-align: center
 	}

 	.home .boxes .item .item-content .bottom-item-content span{
 		font-size: 13px;
 	}

 	.home .boxes .item .item-content .bottom-item-content h6{
 		font-size: 15px;
    	font-weight: 500
 	}

 	/**************************
 	** End Boxes Section ***/


 	/*************************
 	** Start Offers Section **/

 	.offers{
 		background-color: #fff;
 		padding: 80px 0;
 	}

 	.offers .rightsectionanimate{
 		transform: translateX(-100%);
 	}

 	.offers .rightsectionanimate.show{
 		animation: offerssection 1.5s ease-in-out forwards;
 	}

 	.home .offers .top-left-offer{
 		background: url(../assets/offers/01.jpg);
 		background-size: cover;
 		background-position: center;
 		height: 330px;
 		position: relative;
 		margin-bottom: 10px;
 		margin-left: 10px;
 	}

 	.home .offers .top-left-offer .overlay{
 		position: absolute;
 		top: 0; left: 0;
 		right: 0; bottom: 0;
 		background-color: rgba(0,0,0,.2);
 		z-index: 1;
 	}

 	.home .offers .top-left-offer .content{
 		position: absolute;
 		right: 15%;
 		top: 50%;
 		transform: translateY(-50%);
 		z-index: 2;
 		color: #fff;
 	}

 	.home .offers .top-left-offer .content h4{
 		font-weight: 400;
	    letter-spacing: 1px;
 	}

 	.home .offers .top-left-offer .content a{
 		text-decoration: none;
 		color: #fff;
 		font-size: 13px
 	}

 	.home .offers .bottom-left-offer{
 		background: url(../assets/offers/02.jpg);
 		background-size: cover;
 		background-position: center;
 		height: 200px;
 		position: relative;
 		margin-left: 10px;
 	}

 	.home .offers .bottom-left-offer .overlay{
 		position: absolute;
 		top: 0; left: 0;
 		right: 0; bottom: 0;
 		background-color: rgba(0,0,0,.2);
 		z-index: 1;
 	}

 	.home .offers .bottom-left-offer .content{
 		position: absolute;
 		right: 15%;
 		top: 50%;
 		transform: translateY(-50%);
 		z-index: 2;
 		color: #fff;
 	}

 	.home .offers .bottom-left-offer .content h4{
 		font-weight: 400;
	    letter-spacing: 1px;
 	}

 	.home .offers .bottom-left-offer .content a{
 		text-decoration: none;
 		color: #fff;
 		font-size: 13px
 	}

 	.home .offers .bottom-left-offer.right-section{
 		background: url(../assets/offers/03.jpg);
 		margin: 0;
 	}

 	.home .offers .bottom-left-offer.right-section .content{
 		left: 50%;
 		transform: translate(-50%, -50%);
 		text-align: center;
 	}

 	.home .offers .bottom-left-offer.right-section .content h4{
 		font-size: 40px;
 		font-weight: bold;
 	}

 	.home .offers .bottom-left-offer.right-section .content span{
 		font-size: 25px;
 		font-weight: 500;
 	}

 	.offers .left-offer{
 		padding-right: 5px;
 	}

 	.offers .right-offer{
 		padding-left: 5px;
 	}

 	.offers .leftsectionanimate{
 		transform: translateX(100%);
 	}

 	.offers .leftsectionanimate.show{
 		animation: animateOfferright 1.5s ease-in-out forwards;
 	}

 	.home .offers .right-offer-collection{
 		position: relative;
 		background: url(../assets/offers/04.jpg);
 		background-size: cover;
 		background-position: center;
 		height: 540px;
 	}

 	.home .offers .right-offer-collection .overlay{
 		position: absolute;
 		top: 0; left: 0;
 		right: 0; bottom: 0;
 		background-color: rgba(101,90,243,.7);
 		z-index: 1;
 	}
 	
 	.home .offers .right-offer-collection .content{
 		position: absolute;
 		right: 15%;
 		top: 15%;
 		z-index: 2;
 		color: #fff;
 	}

 	.home .offers .right-offer-collection .content h4{
 		font-weight: 400;
	    letter-spacing: 1px;
 	}

 	.home .offers .right-offer-collection .content a{
 		text-decoration: none;
 		color: #fff;
 		font-size: 13px
 	}

 	/* Animation For the Section */

 	@keyframes offerssection{
 		from{
 			transform: translateX(-100%);
 		}
 		to{
 			transform: none;
 		}
 	}

 	@keyframes animateOfferright{
 		from{
 			transform: translateX(100%);
 		}
 		to{
 			transform: none;
 		}
 	}
 	/* End Animation Of the Section */

 	/*************************
 	** End Offers Section **/

 	/*************************
 	** Start Features Section **/

 	.features{
 		padding: 0 0 50px 0;
 		background-color: #fff;
 	}

 	.features h6{
	    font-size: 13px;
   		color: #464444;
   		font-weight: 500;
 	}

 	/*************************
 	** End Features Section **/

 	/****************************
 	** Start Instagram Section **/

 	.instagram{
 		padding: 60px 0;
 	}

 	.instagram .instagram-container{
 		overflow: hidden;
 	}

 	.instagram .instagram-container .instagram-container-content{
 		width: 1600px;
 	}

 	/****************************
 	** End Instagram Section **/

</style>
