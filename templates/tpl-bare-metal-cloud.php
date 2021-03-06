<?php
/* Template Name: Bare Metal Cloud */ 

get_header();?>


<main id="fullpage" class="site-main">
<?php
while ( have_posts() ) : the_post(); 

	$banner_image_url = get_template_directory_uri() . '/dist/assets/images/bare-metal-cloud-banner.jpg';
	$banner_image     = get_field( 'background_banner' );
	if ( ! empty( $banner_image ) ) {
		$banner_image_url = $banner_image['sizes']['banner_image'];
	}
?>
	<section class="section">
		<section class="page-banner about-page-banner bmc-page-banner" style="background-image:url('<?php echo $banner_image_url; ?>')">
			<div class="wrapper">
				<div class="page-banner-content wow fadeInDown">
					<h1 class="large-banner__heading wow fadeInLeft"><?php the_field( 'bare_metal_cloud_title' ); ?></h1>
					<a href="<?php the_field( 'bare_metal_cloud_button_link' ); ?>" class="btn--orange "><?php the_field( 'bare_metal_cloud_button_label' ); ?><i class="fas fa-arrow-right"></i></a>		
				</div>
			</div>
		</section>
	
		<section class="bare-metal-navtabs">
			<div class="navTabs-pills-wrap">
				<div class="wrapper">
					<ul class="nav nav-pills" id="bmc-pills-tab" role="tablist">
						<li class="nav-item" role="presentation">
							<a class="nav-link" id="pills-overview-tab" data-toggle="pill" href="#pills-overview" role="tab" aria-controls="pills-overview" aria-selected="false"><?php the_field( 'tab_beta_metal_title' ); ?></a>
						</li>
						<li class="nav-item" role="presentation">
							<a class="nav-link active" id="pills-why-bmc-tab" data-toggle="pill" href="#pills-why-bmc" role="tab" aria-controls="pills-why-bmc" aria-selected="true"><?php the_field( 'tab_beta_metal_heading_title' ); ?></a>
						</li>
						<li class="nav-item" role="presentation">
							<a class="nav-link" id="pills-bmc-usecases-tab" data-toggle="pill" href="#pills-bmc-usecases" role="tab" aria-controls="pills-bmc-usecases" aria-selected="false"><?php the_field( 'tab_beta_metal_title_heading' ); ?></a>
						</li>
					</ul>
				</div>
			</div>
			<div class="wrapper">
				<div class="tab-content" id="bmc-pills-tabContent">
					<div class="tab-pane fadeInLeft" id="pills-overview" role="tabpanel" aria-labelledby="pills-overview-tab">
						<div class="why-bmc-block-wrap">							
							<div class="carosel-navigation-custom">	
								<?php 
								$bare_count = count(get_field( 'beta_features' ));
								if($bare_count > 3){
								?>	
								<a class="carousel-control-next" href="#bareMetalCloudBlock-overview" role="button" data-slide="next">
									<i class="fas fa-angle-right"></i>
								</a>
								<a class="carousel-control-prev" href="#bareMetalCloudBlock-overview" role="button" data-slide="prev">
									<i class="fas fa-angle-left"></i>
								</a>
								<?php
								}
								?>
							</div>
									
							<div id="bareMetalCloudBlock-overview" class="carousel carousel-fade" data-ride="carousel" data-interval="false">								
								<div class="carousel-inner">									
									<div class="carousel-item active">
										<div class="row">
											<?php											
											$count_overview = 1;
											if ( have_rows( 'beta_features' ) ) : 
											while ( have_rows( 'beta_features' ) ) :
											the_row();								
											?>
											<div class="col-lg-4">
												<div class="bmc-block">
													<div class="nmc-icon-box">
														<?php  the_sub_field( 'svg_icon_value' ); ?>
													</div>
													<h2><?php the_sub_field( 'title' ); ?></h2>
													<p><?php  the_sub_field( 'description' ); ?></p>
												</div>
											</div>
											<?php 
											if($count_overview % 3 == 0 &&  $bare_count >$count_overview){ echo "</div></div><div class='carousel-item'><div class='row'>"; }
											$count_overview++;
											endwhile; 
											endif;
											?>
										</div>
									</div>
								</div>
							</div>						
							<a href="<?php the_field( 'button_label_link' ); ?>" class="btn--orange"><?php the_field( 'button_label' ); ?></a>
						</div>
					</div>
					<div class="tab-pane fadeInLeft show active" id="pills-why-bmc" role="tabpanel" aria-labelledby="pills-why-bmc-tab">
						<div class="why-bmc-block-wrap">
							<div class="carosel-navigation-custom">		
								<a class="carousel-control-next" href="#bareMetalCloudBlock-carousel" role="button" data-slide="next">
									<i class="fas fa-angle-right"></i>
								</a>
								<a class="carousel-control-prev" href="#bareMetalCloudBlock-carousel" role="button" data-slide="prev">
									<i class="fas fa-angle-left"></i>
								</a>
							</div>		
							<div id="bareMetalCloudBlock-carousel" class="carousel carousel-fade" data-ride="carousel" data-interval="false">								
								<div class="carousel-inner wow fadeInRightBig">									
									<div class="carousel-item active">
										<div class="row">
											<?php
											$why_count = count(get_field( 'why_features' ));
											$count_bare_metal = 1;
											if ( have_rows( 'why_features' ) ) : 
											while ( have_rows( 'why_features' ) ) :
											the_row();								
											?>
											<div class="col-lg-4">
												<div class="bmc-block">
													<div class="nmc-icon-box">
														<?php  the_sub_field( 'svg_icon_value' ); ?>
													</div>
													<h2><?php the_sub_field( 'title' ); ?></h2>
													<p><?php  the_sub_field( 'description' ); ?></p>
												</div>
											</div>
											<?php 
											if($count_bare_metal % 3 == 0 && $why_count > $count_bare_metal){ echo "</div></div><div class='carousel-item'><div class='row'>"; }
											$count_bare_metal++;
											endwhile; 
											endif;
											?>
										</div>
									</div>
								</div>
							</div>
								<a href="<?php the_field( 'button_label_link' ); ?>" class="btn--orange"><?php the_field( 'button_label' ); ?></a>
						</div>
					</div>
					<div class="tab-pane fadeInLeft" id="pills-bmc-usecases" role="tabpanel" aria-labelledby="pills-bmc-usecases-tab">
						<div class="why-bmc-block-wrap">
						<div class="carosel-navigation-custom">		
								<a class="carousel-control-next" href="#bareMetalCloudBlock-usecase" role="button" data-slide="next">
									<i class="fas fa-angle-right"></i>
								</a>
								<a class="carousel-control-prev" href="#bareMetalCloudBlock-usecase" role="button" data-slide="prev">
									<i class="fas fa-angle-left"></i>
								</a>
							</div>		
							<div id="bareMetalCloudBlock-usecase" class="carousel carousel-fade" data-ride="carousel" data-interval="false">								
								<div class="carousel-inner">									
									<div class="carousel-item active">
										<div class="row">
											<?php
											$why_count = count(get_field( 'metal_features' ));
											$count_bare_metal = 1;
											if ( have_rows( 'metal_features' ) ) : 
											while ( have_rows( 'metal_features' ) ) :
											the_row();								
											?>
											<div class="col-lg-4">
												<div class="bmc-block">
													<div class="nmc-icon-box">
														<?php  the_sub_field( 'svg_icon_value' ); ?>
													</div>
													<h2><?php the_sub_field( 'title' ); ?></h2>
													<p><?php  the_sub_field( 'description' ); ?></p>
												</div>
											</div>
											<?php 
											if($count_bare_metal % 3 == 0 && $why_count > $count_bare_metal){ echo "</div></div><div class='carousel-item'><div class='row'>"; }
											$count_bare_metal++;
											endwhile; 
											endif;
											?>
										</div>
									</div>
								</div>
							</div>							
							<a href="<?php the_field( 'button_label_link' ); ?>" class="btn--orange"><?php the_field( 'button_label' ); ?></a>
						</div>
					</div>
				</div>
			</div>
		</section>
	</section>

	<section class="bare-metal-power section">
		<div class="wrapper">
			<div class="section-header u-txt-center">
				<h2 class="section-header__title wow fadeInLeft"><?php the_field( 'get_the_power_in_an_instant_title' ); ?></h2>
				<span class="section-header__decoration-element--dark"></span>
				<h4 class="section-header__Orangesub-title wow fadeInRightBig"><?php the_field( 'get_the_power_in_an_instant_short_detail' ); ?></h4>
			</div>
			<div class="row align-items-center">
				<div class="col-md-7  wow fadeInLeftBig">
					<figure class="thumbnail-img">
					
						<?php	
						$power_instance_image_url = '';
						$power_image     = get_field( 'get_the_power_image' );
						if ( ! empty( $power_image ) ) {
							$power_instance_image_url = $power_image['url'];
						}
						?>
						<img src="<?php echo $power_instance_image_url; ?>" alt="bmc-instant-figure-2">
					</figure>
				</div>
				<div class="col-md-5  wow fadeInRightBig">
					<div class="bmc-power-instant-content">
						<?php
						if ( have_rows( 'feature_lists' ) ) : 
						$counter_card = 1;
						while ( have_rows( 'feature_lists' ) ) :
						the_row();
						$power_feature_image = '';
						$power_feature     = get_sub_field( 'icon' );
						if ( ! empty( $power_feature ) ) {
							$power_feature_image = $power_feature['sizes']['mid_icon'];
						}
					    ?>
						<div class="bmc-power-instant-block">
							<div class="bmc-power-instant-icon">
								<div class="bmc-power-instant-icon--inner">
									<img src="<?php echo $power_feature_image; ?>" alt="bmc-instant-icon-1">
								</div>
							</div>
							<h3><?php the_sub_field( 'label' ); ?></h3>
						</div>
						<?php 
						$counter_card++;
						endwhile; 
						endif;
						?>
					</div>
				</div>
			</div>
		</div>
	</section>

	
	<?php if(get_field('showhide_popular_dedicated_server')){ ?>
	<section class="popular-dedicated-server section">
		<div class="wrappper">
			<div class="section-header u-txt-center">
				<h2 class="section-header__title">Our Most Popular Dedicated Server</h2>
				<span class="section-header__decoration-element"></span>
			</div>
		</div>
		<div class="container-fluid">
			<div class="row">
				<div class="col-md-4">
					<div class="server-type-block-wrap  wow fadeInUp">
						<h3><i><img src="<?php echo get_template_directory_uri() . '/dist/assets/images/servers.png'; ?>" alt="servers"></i>Budget Servers</h3>
						<h4>Our Best Selling Budget Servers</h4>
						<div class="row">
							<?php echo do_shortcode('[dedicated_popular_info product_group_id=358 discount=20 caption=""]');?>
						</div>
					</div>
				</div>
				<div class="col-md-4">
					<div class="server-type-block-wrap  wow fadeInUp">
						<h3><i><img src="<?php echo get_template_directory_uri() . '/dist/assets/images/servers.png'; ?>" alt="servers"></i>Pro Servers</h3>
						<h4>Our Best Selling Pro Servers</h4>
						<div class="row">
							<?php echo do_shortcode('[dedicated_popular_info product_group_id=331 discount=20 caption="" ]');?>							
						</div>
					</div>
				</div>
				<div class="col-md-4">
					<div class="server-type-block-wrap  wow fadeInUp">
						<h3><i><img src="<?php echo get_template_directory_uri() . '/dist/assets/images/servers.png'; ?>" alt="servers"></i>Enterprise Servers</h3>
						<h4>Our Best Selling Enterprise Servers</h4>
						<div class="row">
							<?php echo do_shortcode('[dedicated_popular_info  product_group_id=332 discount=20 caption=""]');?>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<?php } ?>
	
<?php endwhile; // end of the loop. ?>
</main>


<?php get_footer(); ?>