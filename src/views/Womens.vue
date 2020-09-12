<template>
  <div class="mens"> 

  	<!-- Scroll Top Button -->
  	<div class="scrollbtn" v-on:click='scrollToTop' v-if='scrolled'>
  		Go To <br/> Top
  	</div>

	<!-- Category Name -->
    <div class="category-name text-center">
    	<h2>Womens Wears</h2>

    	<!-- List Of Clothes Pages -->
		<ul class="list-unstyled">
			<router-link to="/" tag='li'>
	      		<a>General</a>
		    </router-link>

		    <router-link to="/mens" tag='li'>
		      	<a>Mens</a>
		    </router-link>

		    <router-link to="/womens" tag='li'>
		      	<a class="active">Womens</a>
		    </router-link>

		    <router-link to="/children" tag='li'>
		      	<a>Children</a>
		    </router-link>
		</ul>
    </div>

    <div class="content">

		<div class="mens-content" v-if='firstpage'>
			<!-- Main Container -->
			<div class="container">
				<!-- Top Content -->
		    	<div class="top-content">
		    		<ul class="list-unstyled">
		    			<li><a href="#">All</a></li>
		    			<li><a href="#">Hot Product</a></li>
		    			<li><a class="active" href="#">New Product</a></li>
		    			<li><a href="#">Sales Product</a></li>
		    		</ul>
		    	</div>

		    	<!-- Man Section -->
				<div class="row top-row">
					<div class="col-md-4">
						<div class="item">
							<!-- Image Part -->
							<div class="img">
								<img src='@/assets/women/01.jpg' alt="Man Pic 1" />
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
						<div class="item">
							<!-- Image Part -->
							<div class="img">
								<img src='@/assets/women/02.jpg' alt="Man Pic 1" />
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
						<div class="item">
							<!-- Image Part -->
							<div class="img">
								<img src='@/assets/women/03.jpg' alt="Man Pic 1" />
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
						<div class="item">
							<!-- Image Part -->
							<div class="img">
								<img src='@/assets/women/04.jpg' alt="Man Pic 1" />
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
						<div class="item">
							<!-- Image Part -->
							<div class="img">
								<img src='@/assets/women/05.jpg' alt="Man Pic 1" />
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
						<div class="item">
							<!-- Image Part -->
							<div class="img">
								<img src='@/assets/women/06.jpg' alt="Man Pic 1" />
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
		    </div>
		</div>

		<div class="mens-content" v-if='secondpage'>
			<div class="container">
		    	<!-- Man Section -->
				<div class="row top-row">
					<div class="col-md-4">
						<div class="item">
							<!-- Image Part -->
							<div class="img">
								<img src='@/assets/women/07.jpg' alt="Man Pic 1" />
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
						<div class="item">
							<!-- Image Part -->
							<div class="img">
								<img src='@/assets/women/08.jpg' alt="Man Pic 1" />
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
						<div class="item">
							<!-- Image Part -->
							<div class="img">
								<img src='@/assets/women/09.jpg' alt="Man Pic 1" />
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
						<div class="item">
							<!-- Image Part -->
							<div class="img">
								<img src='@/assets/women/10.jpg' alt="Man Pic 1" />
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
						<div class="item">
							<!-- Image Part -->
							<div class="img">
								<img src='@/assets/women/11.jpg' alt="Man Pic 1" />
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
						<div class="item">
							<!-- Image Part -->
							<div class="img">
								<img src='@/assets/women/12.jpg' alt="Man Pic 1" />
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
			</div>
	    </div>

	    <div class="mens-content" v-if='thirdpage'>
			<div class="container">
		    	<!-- Man Section -->
				<div class="row top-row">
					<div class="col-md-4">
						<div class="item">
							<!-- Image Part -->
							<div class="img">
								<img src='@/assets/women/13.jpg' alt="Man Pic 1" />
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
						<div class="item">
							<!-- Image Part -->
							<div class="img">
								<img src='@/assets/women/14.jpg' alt="Man Pic 1" />
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
						<div class="item">
							<!-- Image Part -->
							<div class="img">
								<img src='@/assets/women/15.jpg' alt="Man Pic 1" />
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
						<div class="item">
							<!-- Image Part -->
							<div class="img">
								<img src='@/assets/women/16.jpg' alt="Man Pic 1" />
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
						<div class="item">
							<!-- Image Part -->
							<div class="img">
								<img src='@/assets/women/17.jpg' alt="Man Pic 1" />
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
						<div class="item">
							<!-- Image Part -->
							<div class="img">
								<img src='@/assets/women/14.jpg' alt="Man Pic 1" />
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
			</div>
	    </div>

	    <div class="loadmore text-center">
	    	<button class="btn" v-on:click='loadMore()' v-text="next"></button>
	    </div>

    </div>	
  </div>
</template>

<script>
	export default {
		name: 'men',
		data() {
			return {
				test: 'Sami',
				firstpage: true,
				secondpage: false,
				thirdpage: false,
				count: 0,
				next: 'Next Page',
				scrolled: false,
				windowScroll: window.scrollY
			}
		},
		methods: {
			loadMore: function () {
				if(this.count == 0){
					this.firstpage = false;
					this.secondpage = true;
					this.count++;
					window.scrollTo(0, 0);
				} else if(this.count == 1) {
					this.secondpage = false;
					this.thirdpage = true;
					this.count++;
					this.next = 'Go To First Page';
					window.scrollTo(0, 0);
				} else {
					this.firstpage = true;
					this.secondpage = false;
					this.thirdpage = false;
					this.count = 0;
					this.next = 'Next Page';
					window.scrollTo(0, 0);
				}
			},

			countScroll: function () {
				this.windowScroll = window.top.scrollY;
				if(this.windowScroll >= 100) {
					this.scrolled = true;
				} else {
					this.scrolled = false;
				}
			},

			scrollToTop: function() {
				window.scrollTo(0, 0);
			}
		},
		created() {
			window.addEventListener('scroll', this.countScroll);
		}

	};
</script>

<style>
	.mens{
		margin-top: 62px;
		position: relative;
	}

	.mens .scrollbtn{
	    position: fixed;
	    z-index: 1000;
	    bottom: 80px;
	    right: 20px;
	    padding: 9px;
	    text-align: center;
	    font-weight: 700;
	    border-radius: 50%;
	    background: #ffa84c;
	    color: #fff;
	    font-size: 12px;
	    line-height: 1.5;
	    cursor: pointer;
	}

	.mens .scrollbtn span{
		
	}

	.mens .content{
		background-color: #fff;
		padding: 60px 0;
	}

	.mens .category-name{
		background-color: #EEE;
		padding: 40px 0;
	}

	.mens .category-name h2{
		margin-bottom: 20px;
	    font-weight: 700;
	    font-size: 55px;
        color: #ffa84c
	}
	.mens .category-name ul{
		margin-bottom: 0;
	    display: flex;
	    justify-content: center
	}

	.mens .category-name ul li{
		margin-right: 10px;
	}

	.mens .category-name ul li a{
		text-decoration: none;
	    color: #3e3b3b;
	    font-weight: bold;
        color: #7d7979
	}

	.mens .category-name ul li a.active,
	.mens .category-name ul li a:hover{
		color: #655af3;
	}
	.mens .mens-content{
		background-color: #fff;
	}

	.mens .mens-content .top-content{
		margin-bottom: 30px;
	}

	.mens .mens-content .top-content ul{
		display: flex;
	}

	.mens .mens-content .top-content ul li{
		margin-right: 30px;		
	}

	.mens .mens-content .top-content ul li a.active,
	.mens .mens-content .top-content ul li a:hover{
		color: #655af3;
	}

	.mens .mens-content .top-content ul li a{
		text-decoration: none;
	    color: #7d7979;
	    font-weight: 500
	}

	.mens .item{
		padding: 0;
	    box-shadow: 0px 5px 15px -4px #00000080;
	    margin-bottom: 30px;
	}
	.mens .item .img img{
		width: 100%;
	}

	.mens .item .info{
		background-color: #f5efef;
	}

	.mens .item .info .top-info{
		padding: 10px 20px;
	    margin-top: 2px;
	    display: flex;
	    justify-content: space-between;
	}

	.mens .item .info .top-info h6{
		margin-bottom: 0;
	}

	.mens .item .info .top-info h6 a{
		text-decoration: none;
	    color: #6b6565;
	    font-weight: 500;
	    font-size: 21px;
	}

	.mens .item .info .top-info span{
	    font-size: 40px;
	    display: block;
	    color: #655af3;
	}

	.mens .item .info .bottom-info button{
	    width: 50%;
	    border-radius: 0;
	    padding: 15px;
	    cursor: pointer;
	    transition: all .5s ease-in-out;
	}

	.mens .item .info .bottom-info button:focus{
		outline: 0;
		box-shadow: none;
	}

	.mens .item .info .bottom-info button.buy{
	}

	.mens .item .info .bottom-info button.buy:hover{
		background-color: #ffa84c;
		color: #fff;
	}

	.mens .item .info .bottom-info button.details:hover{
		background-color: #655af3;
		color: #fff;
	}

	/* Start Media Screen For Item */
	@media screen and (max-width: 767px) {
		.mens .top-row{
			margin-bottom: 0;
		}
		.mens .item{
			margin-bottom: 30px;
		}
	}
	/* End Media Screen For Item*/

	/* Start Load More Section */

	.mens .content .loadmore button{
	    background-color: #655af3;
	    padding: 10px 27px;
	    color: #fff;
	    font-weight: 700;
	    font-size: 17px;
	    border-radius: 27px;
	    border: 2px solid transparent;
	}

	.mens .content .loadmore button:hover{
		background-color: transparent;
	    color: #655af3;
	    border-color: #655af3;
	}

	/* End Load More Section */

</style>





