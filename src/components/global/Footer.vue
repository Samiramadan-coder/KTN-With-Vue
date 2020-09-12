<!-- Footer Template -->
<template>
	<footer class="Footer">

		<!-- Main Links and Contacts -->
		<div class="main-contact">
			<div class="container-fluid">
				<div class="row">
					<!-- left-main-contact -->
					<div class="col-md-4">
						<div class="left-main-contact">
							
							<div class="head-left-main-contact">
								<img src="@/assets/little-cost-footer.png">
							</div>

							<div class="body-left-main-contact">
								<h2>Koton</h2>
								<p>
									Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Fusce venenatis vel velit vel euismod.
								</p>
							</div>

						</div>
					</div>

					<!-- middle-main-contact -->
					<div class="col-md-4">
						<div class="middle-main-contact">
							<h2>Support</h2>
							<ul class="list-unstyled">
								<li><a href="#">Customer Service</a></li>
								<li><a href="#">Return Policy</a></li>
								<li><a href="#">Size Guide</a></li>
								<li><a href="#">Terms and Conditions</a></li>
								<li><a href="#">Contact</a></li>
							</ul>
						</div>
					</div>

					<!-- right-main-conact -->
					<div class="col-md-4">
						<div class="right-main-conact">
							<h2>Stay in Touch</h2>
							<div class="subscribe">
								<input type="text" name="" placeholder="Subscribe Now">
								<button>+</button>
							</div>
							<h2>Social</h2>
							<ul class="list-unstyled">
								<li><a href="#"><font-awesome-icon :icon="['fab', 'facebook']"/></a></li>
								<li><a href="#"><font-awesome-icon :icon="['fab', 'twitter']"/></a></li>
								<li><a href="#"><font-awesome-icon :icon="['fab', 'youtube']"/></a></li>
								<li><a href="#"><font-awesome-icon :icon="['fab', 'instagram']"/></a></li>
							</ul>
						</div>
					</div>

				</div>
			</div>
		</div>

		<!-- Copyright Section -->
		<div class="copyright">
			<div class="container">
				<div class="row">
					<div class="col-lg-8 col-md-6">
						<div class="footer-copyright">
							<h5 class="">Copyright &copy; 2020 Designed by <a href="">Sami Ramadan</a></h5>
						</div>
					</div>
					<div class="col-lg-4 col-md-6">
						<div class="footer-links">
							<ul	class='list-unstyled'>
								<li><a href="#">Women</a></li>
								<li><a href="#">Men</a></li>
								<li><a href="#">Kids</a></li>
								<li><a href="#">Home Deco</a></li>
								<li><a href="#">Contact</a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>

	</footer>
</template>

<!-- Footer Script -->
<script>
	export default{
		name: 'Appfooter'
	};
</script>

<!-- Footer Style -->
<style scoped>

	/*Main Section Style*/
	footer .main-contact{
		padding: 50px 0;
	}

	/*Left Main Section Style*/
	footer .main-contact .left-main-contact{
		display: flex;
	}

	footer .main-contact .left-main-contact .head-left-main-contact{
		margin-right: 20px;
	}

	footer .main-contact .left-main-contact .body-left-main-contact{
		display: flex;
		flex-direction: column;
	}

	footer .main-contact .left-main-contact .body-left-main-contact h2{
	    margin-bottom: 30px;
	    padding-top: 10px;
	    font-size: 40px;
	    color: #3e3b3b;
	    font-weight: 600
	}

	footer .main-contact .left-main-contact .body-left-main-contact p{
	    color: #6f6c6c;
	    font-size: 17px;
	    line-height: 1.9
	}

	/*Middle Main Section Style*/
	footer .middle-main-contact{
		padding: 0 20px 0 30px;
	}

	footer .middle-main-contact h2{
		margin-bottom: 30px;
	    padding-top: 10px;
	    font-size: 40px;
	    color: #3e3b3b;
	    font-weight: 600
	}

	footer .middle-main-contact ul{
		margin-bottom: 0;
	}

	footer .middle-main-contact ul li{
		padding: 15px 0;
    	border-bottom: 1px solid #d8d3d3
	}

	footer .middle-main-contact ul li a{
		text-decoration: none;
		color: #525050;
		font-weight: 660;
		font-size: 17px;
		transition: all .3s ease-in-out	
	}

	footer .middle-main-contact ul li a:hover{
		color: #655af3;
	}

	/*Right Main Section*/
	footer .right-main-conact{
		padding: 0 0 0 30px;
	}

	footer .right-main-conact h2{
		margin-bottom: 30px;
	    padding-top: 10px;
	    font-size: 40px;
	    color: #3e3b3b;
	    font-weight: 600
	}

	footer .right-main-conact .subscribe{
		position: relative;
		margin-bottom: 20px;
		width: 80%;
	}

	footer .right-main-conact .subscribe input{
	    width: 100%;
	    padding: 15px;
	    border: 0;
	    border-radius: 25px;
	    color: #000
	}

	footer .right-main-conact .subscribe input:focus{
		outline: none;
	}

	footer .right-main-conact .subscribe button{
		position: absolute;
	    left: 100%;
	    padding: 13px 20px;
	    border-radius: 50%;
	    border: 0;
	    background-color: #655af3;
	    font-weight: bold;
	    color: #fff;
	    font-size: 20px;
	    transform: translateX(-50%)
	}

	footer .right-main-conact ul{
		display: flex;
		margin:0;
	}

	footer .right-main-conact ul li{
		margin-right: 10px;
	    padding: 10px;
	    border: 2px solid #6b6868;
	    border-radius: 50%;
	    display: flex;
	    align-items: center;
	    justify-content: center;
	    cursor: pointer;
	    transition: all .3s ease-in-out;
	}

	footer .right-main-conact ul li:hover{
		transform: translateY(-5px);
		border-color: #655af3;
	}

	footer .right-main-conact ul li a{
		text-decoration: none;
		color: #6b6868;
		display: flex;
	    align-items: center;
	    justify-content: center;
	}

	footer .right-main-conact ul li:hover a{
		color: #655af3;
	}

	footer .right-main-conact ul li a svg{
		font-size: 25px;
	}

	/*Copy Right Section Style*/
	footer .copyright{
		background-color: #655af3;
		padding: 20px 0;
		
	}

	footer .footer-copyright{
		display: flex;
		align-items: center;
		height: 100%;
	}
	footer .copyright h5{
	    color: #fff;
    	font-weight: 200;
    	word-spacing: 5px;
    	margin: 0;
	}

	footer .copyright h5 a{
		text-decoration: none;
	    font-weight: 500;
	    color: #333;
	}
	footer .footer-links ul{
		display: flex;
		margin-bottom: 0;
	}

	footer .footer-links ul li {
		margin-right: 1.1rem;
	}

	footer .footer-links ul li a{
		text-decoration: none;
		color: #fff;
	}
	/* Media Query Section*/
	@media screen and (min-width: 768px) and (max-width: 992px){

		footer .main-contact .left-main-contact .body-left-main-contact h2,
		footer .middle-main-contact h2,
		footer .right-main-conact h2{
			font-size: 30px;
		}

		footer .main-contact .left-main-contact .body-left-main-contact p{
			font-size: 15px;
		}

		footer .middle-main-contact ul li{
			padding: 10px 0;
		}

		footer .middle-main-contact ul li a{
			font-size: 15px;
		}

		footer .right-main-conact ul li{
		    padding: 7px;
    		margin-right: 7px
		}

		footer .right-main-conact ul li a svg{
			font-size: 18px;
		}

		footer .copyright h5{
			font-size: 14px;
		}

		footer .footer-links ul li a{
			font-size: 14px;
		}
	}

	@media screen and (max-width: 767px){
		footer .main-contact .left-main-contact,
		footer .right-main-conact,
		footer .middle-main-contact{
			margin-bottom: 30px;
		}

		footer .footer-links ul{
			margin-top: 10px;
		}

	}
</style>



