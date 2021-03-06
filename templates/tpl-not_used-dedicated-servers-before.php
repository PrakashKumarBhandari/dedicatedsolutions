<?php
/* Dedicated Servers */ 

get_header();?>
<main id="fullpage" class="site-main">
<?php while ( have_posts() ) : the_post(); 

	$banner_image_url = get_template_directory_uri() . '/dist/assets/images/bare-metal-cloud-banner.jpg';
	$banner_image     = get_field( 'banner_bg' );
	if ( ! empty( $banner_image ) ) {
		$banner_image_url = $banner_image['sizes']['banner_image'];
	}
?>
<section class="section">
		<section class="page-banner dedicated-server-page-banner" style="background-image:url('<?php echo $banner_image_url; ?>')">
			<div class="wrapper">			
				<div class="page-banner-content">
					<h4>Starting from</h4>
					<div class="starting-price">
						<span class="price">
						<?php 
						$deci_arr = array();	
						$deci_arr[0] = '00';
						$deci_arr[1] = '00';
							$price_doller = get_field('starting_from_price_per_month'); 
							if(is_numeric($price_doller)){
								$decimal_price = number_format($price_doller, 2, '.', '');
								$deci_arr = explode('.',$decimal_price);								
							}
							
							if(is_numeric($price_doller)){ echo"$".$deci_arr[0]; echo'<span class="subPrice">'.'.'.$deci_arr[1].'</span></span>'; }else{
								echo $price_doller;
							}
							?>
						<span class="per-month">/month</span>
					</div>
					<h1 class="large-banner__heading"><?php the_field('dedicated_server_title');?></h1>
					<p><?php the_field('dedicated_server_sub_title');?></p>
					<div class="large-banner__features">
						<ul class="large-banner__features-list">
							<?php
							if ( have_rows( 'dedicated_server_feature_lists' ) ) : 
							while ( have_rows( 'dedicated_server_feature_lists' ) ) :
							the_row();						
							?>
							<li class="large-banner__features-item"><i class="fas fa-check-circle"></i><?php the_sub_field('list');?></li>
							<?php 
							endwhile; 
							endif;			
							?>							
						</ul>
					</div>
				</div>
			</div>
		</section>
		
		<section class="dedicated-server-navTabs">
			<div class="navTabs-pills-wrap">
				<div class="wrapper">
					<ul class="nav nav-pills" id="db-bd-hosting-pills-tab" role="tablist">
						<?php
						$counter = 1;
						if ( have_rows( 'three_tab' ) ) : 
						while ( have_rows( 'three_tab' ) ) :
						the_row();						
						?>
						<li class="nav-item" role="presentation">
							<a class="nav-link <?php if( $counter==2){ echo 'active'; } ?>"  id="server-<?php echo $counter;?>-tab" data-toggle="pill" href="#server-config-<?php echo $counter;?>" role="tab" aria-controls="#server-config-<?php echo $counter;?>" aria-selected="<?php if( $counter==2){ echo 'true'; }else{ echo 'false';}?>"><?php the_sub_field('tab_title');?></a>
						</li>
						<?php 
						$counter++;
						endwhile; 
						endif;			
						?>
					</ul>
				</div>
			</div>
			<div class="wrapper">
				<div class="tab-content" id="bmc-pills-tabContent">				
					<?php
					$tab_count = 1;
					if ( have_rows( 'three_tab' ) ) : 
					while ( have_rows( 'three_tab' ) ) :
					the_row();						
					?>
						<div class="tab-pane fade <?php if($tab_count == 2){ echo"show active"; }?> " id="server-config-<?php echo $tab_count;?>" role="tabpanel" aria-labelledby="server-<?php echo $tab_count;?>-tab">
						<div class="row">
							<?php
							if ( have_rows( 'block_feature_lists' ) ) : 
							while ( have_rows( 'block_feature_lists' ) ) :
							the_row();						
							?>
							<div class="col-md-3">
								<div class="dedicated-server-block">
									<div class="ds-icon-box">
										<?php 
										$feature_img_icon = get_template_directory_uri() . '/dist/assets/images/customer-support-2.png';
										$feature_icon     = get_sub_field( 'feature_icon' );
										if ( ! empty( $feature_icon ) ) {
											$feature_img_icon = $feature_icon['sizes']['mid_icon'];
										}
										if(!empty($feature_img_icon)){ echo"<img src='".$feature_img_icon."'>"; }
										?>
									</div>
									<h3><?php the_sub_field('title');?></h3>
									<p><?php the_sub_field('short_detail');?></p>
								</div>
							</div>
							<?php 
							endwhile; 
							endif;			
							?>
						</div>
					</div>
					<?php 
					$tab_count++;
					endwhile; 
					endif;			
					?>
				</div>
			</div>
		</section>
	</section>

	<section class="ds-server-hosting-feat section">
		<div class="wrapper">
			<div class="section-header u-txt-center">
				<h2 class="section-header__title"><?php the_field('heading_title');?></h2>
				<span class="section-header__decoration-element--dark"></span>
				<h4 class="section-header__Orangesub-title"><?php the_field('sub_heading_title');?></h4>
			</div>
			<div class="row align-items-center">
				<div class="col-md-4 order-md-1">
					<div class="thumbnail-img">
						<?php 
						$hosting_feature = get_template_directory_uri() . '/dist/assets/images/ds-hosting-feat.png';
						$img_hosting_feature     = get_sub_field( 'icon' );
						if ( ! empty( $img_hosting_feature ) ) {
							$hosting_feature = $img_hosting_feature['sizes']['mid_icon'];
						}
						if(!empty($hosting_feature)){ echo"<img src='".$hosting_feature."'>"; }
						?>
					</div>
				</div>
				<div class="col-md-4 order-md-0">
					<div class="ds-hosting-feat-block">
						<?php
						$count = 1;
						if ( have_rows( 'hosting_feature_list' ) ) : 
						while ( have_rows( 'hosting_feature_list' ) ) :
						the_row();
						if($count %2 != 0){ 
						?>
						<div class="ds-hosting-feat-list">
							<div class="ds-hosting-icon">
								<?php 
								$conf_icon = get_template_directory_uri() . '/dist/assets/images/ds-feat-icon1.png';
								$img_conf_icon     = get_sub_field( 'icon' );
								if ( ! empty( $img_conf_icon ) ) {
									$conf_icon = $img_conf_icon['sizes']['mid_icon'];
								}
								if(!empty($conf_icon)){ echo"<img src='".$conf_icon."'>"; }
								?>	
							</div>
							<div class="ds-hosting-content">
								<h3><?php the_sub_field('title');?></h3>
								<p><?php the_sub_field('short_detail');?></p>
							</div>
						</div>
						<?php 
						}
						$count++;
						endwhile; 
						endif;
						?>
					</div>
				</div>
				<div class="col-md-4 order-md-2">
					<div class="ds-hosting-feat-block">
					<?php
						$count_right = 1;
						if ( have_rows( 'hosting_feature_list' ) ) : 
						while ( have_rows( 'hosting_feature_list' ) ) :
						the_row();
						if($count_right %2 == 0){ 
						?>
						<div class="ds-hosting-feat-list">
							<div class="ds-hosting-icon">
								<?php 
								$conf_icon = get_template_directory_uri() . '/dist/assets/images/ds-feat-icon1.png';
								$img_conf_icon     = get_sub_field( 'icon' );
								if ( ! empty( $img_conf_icon ) ) {
									$conf_icon = $img_conf_icon['sizes']['mid_icon'];
								}
								if(!empty($conf_icon)){ echo"<img src='".$conf_icon."'>"; }
								?>	
							</div>
							<div class="ds-hosting-content">
								<h3><?php the_sub_field('title');?></h3>
								<p><?php the_sub_field('short_detail');?></p>
							</div>
						</div>
						<?php 
						}
						$count_right++;
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
					<div class="server-type-block-wrap">
						<h3><i><img src="<?php echo get_template_directory_uri() . '/dist/assets/images/servers.png'; ?>" alt="servers"></i>Budget Servers</h3>
						<h4>Our Best Selling Budget Servers</h4>
						<div class="row">
							<?php
							global $post;
							
							$budget_query = array(
								'posts_per_page' => 4,
								'post_type'      => 'product',
								'tax_query' => array(
									array(
										'taxonomy' => 'product_cat',
										'field'    => 'slug',
										'terms'    => array( 'budget-servers' ),
									)
								)
							);		
														
							$budget_server = new WP_Query($budget_query);
							if ( $budget_server->have_posts() ) :
							while ( $budget_server->have_posts() ) : $budget_server->the_post(); 
							?>
							<div class="col-md-6">
								<div class="server-type-block">
									<div class="server-tye-header">
										<h5><?php the_title(); ?> <span><?php the_field( 'server_ghz' ); ?></span></h5>
									</div>
									<div class="server-type-logo">
										<?php
										$server_list_icon = '';
										$serv_icon_image = get_field('server_icon', get_the_ID());
										if ( ! empty( $serv_icon_image ) ) {
											$server_list_icon = $serv_icon_image['url'];
										}
										?>
										<span><img src="<?php echo $server_list_icon; ?>" alt="<?php the_title(); ?>"  class="server-icon-image"></span>
									</div>
									<ul>
										<li>Server - <?php the_field( 'server_ghz' ); ?></li>
										<li>HDD - <?php $hdd = get_field( 'hdd' );  $raid = get_field( 'raid' ); echo strlimit(strip_tags($hdd.' '.$raid),'25','');  ?></li>
										<li>RAM - <?php the_field( 'ram' ); ?></li>
										<li>PORT - <?php the_field( 'port' ); ?></li>
										<li>LOCATION  - <?php the_field( 'location' ); ?></li>
									</ul>
									<a href="<?php the_field( 'instance_order_link' ); ?>" class="btn--orange">Order (Instant) <i class="fas fa-arrow-right"></i></a>
								</div>
							</div>
							<?php
							endwhile; 
							wp_reset_postdata();
							endif; 
							?>
						</div>
					</div>
				</div>
				<div class="col-md-4">
					<div class="server-type-block-wrap">
						<h3><i><img src="<?php echo get_template_directory_uri() . '/dist/assets/images/servers.png'; ?>" alt="servers"></i>Pro Servers</h3>
						<h4>Our Best Selling Pro Servers</h4>
						<div class="row">
							<?php
							global $post;
							
							$pro_query = array(
								'posts_per_page' => 4,
								'post_type'      => 'product',
								'tax_query' => array(
									array(
										'taxonomy' => 'product_cat',
										'field'    => 'slug',
										'terms'    => array( 'pro-servers' ),
									)
								)
							);		
														
							$pro_server = new WP_Query($pro_query);
							if ( $pro_server->have_posts() ) :
							while ( $pro_server->have_posts() ) : $pro_server->the_post(); 
							?>
							<div class="col-md-6">
								<div class="server-type-block">
									<div class="server-tye-header">
										<h5><?php the_title(); ?> <span><?php the_field( 'server_ghz' ); ?></span></h5>
									</div>
									<div class="server-type-logo">
										<?php
										$server_list_icon = '';
										$serv_icon_image = get_field('server_icon', get_the_ID());
										if ( ! empty( $serv_icon_image ) ) {
											$server_list_icon = $serv_icon_image['url'];
										}
										?>
										<span><img src="<?php echo $server_list_icon; ?>" alt="<?php the_title(); ?>"  class="server-icon-image"></span>
									</div>
									<ul>
										<li>Server - <?php the_field( 'server_ghz' ); ?></li>
										<li>HDD - <?php $hdd = get_field( 'hdd' );  $raid = get_field( 'raid' ); echo strlimit(strip_tags($hdd.' '.$raid),'25','');  ?></li>
										<li>RAM - <?php the_field( 'ram' ); ?></li>
										<li>PORT - <?php the_field( 'port' ); ?></li>
										<li>LOCATION  - <?php the_field( 'location' ); ?></li>
									</ul>
									<a href="<?php the_field( 'instance_order_link' ); ?>" class="btn--orange blue">Order (Instant) <i class="fas fa-arrow-right"></i></a>
								</div>
							</div>
							<?php 
							endwhile; 
							wp_reset_postdata();
							endif;
							?>
						</div>
					</div>
				</div>
				<div class="col-md-4">
					<div class="server-type-block-wrap">
						<h3><i><img src="<?php echo get_template_directory_uri() . '/dist/assets/images/servers.png'; ?>" alt="servers"></i>Enterprise Servers</h3>
						<h4>Our Best Selling Enterprise Servers</h4>
						<div class="row">
						    <?php
							global $post;
							
							$enterprise_query = array(
								'posts_per_page' => 4,
								'post_type'      => 'product',
								'tax_query' => array(
									array(
										'taxonomy' => 'product_cat',
										'field'    => 'slug',
										'terms'    => array( 'enterprise-servers' ),
									)
								)
							);		
														
							$enterprise_server = new WP_Query($enterprise_query);
							if ( $enterprise_server->have_posts() ) :
							while ( $enterprise_server->have_posts() ) : $enterprise_server->the_post(); 
							?>
							<div class="col-md-6">
								<div class="server-type-block">
									<div class="server-tye-header">
										<h5><?php the_title(); ?> <span><?php the_field( 'server_ghz' ); ?></span></h5>
									</div>
									<div class="server-type-logo">
										<?php
										$server_list_icon = '';
										$serv_icon_image = get_field('server_icon', get_the_ID());
										if ( ! empty( $serv_icon_image ) ) {
											$server_list_icon = $serv_icon_image['url'];
										}
										?>
										<span><img src="<?php echo $server_list_icon; ?>" alt="<?php the_title(); ?>" class="server-icon-image"></span>
									</div>
									<ul>
										<li>Server - <?php the_field( 'server_ghz' ); ?></li>
										<li>HDD - <?php $hdd = get_field( 'hdd' );  $raid = get_field( 'raid' ); echo strlimit(strip_tags($hdd.' '.$raid),'25','');  ?></li>
										<li>RAM - <?php the_field( 'ram' ); ?></li>
										<li>PORT - <?php the_field( 'port' ); ?></li>
										<li>LOCATION  - <?php the_field( 'location' ); ?></li>
									</ul>
									<a href="<?php the_field( 'instance_order_link' ); ?>" class="btn--orange success">Order (Instant) <i class="fas fa-arrow-right"></i></a>
								</div>
							</div>
							<?php 
							endwhile; 
							wp_reset_postdata();
							endif;
							?>							
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<?php } ?>
	
	<section class="all-server-details section">
		<div class="navTabs-pills-wrap">
			<div class="wrapper">
				<ul class="nav nav-pills" id="db-bd-hosting-pills-tab" role="tablist">
					<li class="nav-item" role="presentation">
						<a class="nav-link active" id="budget-server-tab" data-toggle="pill" href="#budget-server" role="tab" aria-controls="budget-server" aria-selected="true">View Budget Servers</a>
					</li>
					<li class="nav-item" role="presentation">
						<a class="nav-link" id="pro-server-tab" data-toggle="pill" href="#pro-server" role="tab" aria-controls="pro-server" aria-selected="false">View Pro Servers</a>
					</li>
					<li class="nav-item" role="presentation">
						<a class="nav-link" id="enterprise-server-tab" data-toggle="pill" href="#enterprise-server" role="tab" aria-controls="enterprise-server" aria-selected="false">View Enterprise Servers</a>
					</li>
				</ul>
			</div>
		</div>
		<div class="server-details-table-wrap">
			<div class="tab-content" id="bmc-pills-tabContent">
				<div class="tab-pane fade show active" id="budget-server" role="tabpanel" aria-labelledby="budget-server-tab">
					<table class="table table-bordered">
						<thead>
							<tr>
								<th>Model</th>
								<th>CPU</th>
								<th>RAM</th>
								<th>RAID</th>
								<th>HDD</th>
								<th>LOCATION</th>
								<th>PORT</th>
								<th>PRICE</th>
								<th>AVAILABLE</th>
								<th>&nbsp;</th>
							</tr>
						</thead>
						<tbody>
						    <?php
							global $post;
							
							$budget_query = array(
								'posts_per_page' => 10,
								'post_type'      => 'product',
								'tax_query' => array(
									array(
										'taxonomy' => 'product_cat',
										'field'    => 'slug',
										'terms'    => array( 'budget-servers' ),
									)
								)
							);		
														
							$budget_server = new WP_Query($budget_query);
							if ( $budget_server->have_posts() ) :
							while ( $budget_server->have_posts() ) : $budget_server->the_post(); 
							
							$price = get_post_meta( get_the_ID(), '_regular_price', true);
							$price_sale = get_post_meta( get_the_ID(), '_sale_price', true);

							?>									
							<tr>
								<td>
									<?php 
									$server_icon = get_template_directory_uri() . '/dist/assets/images/customer-support-2.png';
									$img_server_icon     = get_field( 'server_icon' );
									if ( ! empty( $img_server_icon ) ) {
										$server_icon = $img_server_icon['sizes']['mid_icon'];
									}
									if(!empty($server_icon)){ echo"<span class='logo-type'><img src='".$server_icon."'></span>"; }
									?>										
									<?php the_field( 'model' ); ?>
								</td>
								<td><?php the_title(); ?> <span class="orangeText"><?php the_field( 'server_ghz' ); ?></span></td>
								<td><?php the_field( 'ram' ); ?> <span class="orangeText">RAM</span></td>
								<td><?php the_field( 'raid' ); ?></td>
								<td><?php the_field( 'hdd' ); ?></td>
								<td><?php the_field( 'location' ); ?></td>
								<td><?php the_field( 'port' ); ?></td>
								<td>
								<span class="orangeText new-price"><?php $current_price = (float)$price_sale; echo"$".number_format($current_price, 2); ?></span>
									<span class="old-price"><?php $old_price = (float)$price;  echo"$".number_format($old_price, 2);  ?></span>
								</td>
								<td><?php the_field( 'available' ); ?></td>
								<td>
									<a href="<?php /* the_permalink();*/ ?>" class="btn--orange">Configure <i class="fas fa-arrow-right"></i></a>
								</td>
							</tr>
							<?php 
							endwhile; 
							wp_reset_postdata();
							endif; 
							?>
						</tbody>
					</table>
				</div>
				<div class="tab-pane fade" id="pro-server" role="tabpanel" aria-labelledby="pro-server-tab">
				<table class="table table-bordered">
						<thead>
							<tr>
								<th>Model</th>
								<th>CPU</th>
								<th>RAM</th>
								<th>RAID</th>
								<th>HDD</th>
								<th>LOCATION</th>
								<th>PORT</th>
								<th>PRICE</th>
								<th>AVAILABLE</th>
								<th>&nbsp;</th>
							</tr>
						</thead>
						<tbody>
						    <?php
							global $post;
							
							$pro_query = array(
								'posts_per_page' => 10,
								'post_type'      => 'product',
								'tax_query' => array(
									array(
										'taxonomy' => 'product_cat',
										'field'    => 'slug',
										'terms'    => array('pro-servers'),
									)
								)
							);		
														
							$pro_server = new WP_Query($pro_query);
							if ( $pro_server->have_posts() ) :
							while ( $pro_server->have_posts() ) : $pro_server->the_post(); 
								$price = get_post_meta( get_the_ID(), '_regular_price', true);
								$price_sale = get_post_meta( get_the_ID(), '_sale_price', true);
							?>									
							<tr>
								<td>
									<?php 
									$server_icon = get_template_directory_uri() . '/dist/assets/images/customer-support-2.png';
									$img_server_icon     = get_field( 'server_icon' );
									if ( ! empty( $img_server_icon ) ) {
										$server_icon = $img_server_icon['sizes']['mid_icon'];
									}
									if(!empty($server_icon)){ echo"<span class='logo-type'><img src='".$server_icon."'></span>"; }
									?>										
									<?php the_field( 'model' );  ?>
								</td>
								<td><?php the_title(); ?> <span class="orangeText"><?php the_field( 'server_ghz' ); ?></span></td>
								<td><?php the_field( 'ram' ); ?> <span class="orangeText">RAM</span></td>
								<td><?php the_field( 'raid' ); ?></td>
								<td><?php the_field( 'hdd' ); ?></td>
								<td><?php the_field( 'location' ); ?></td>
								<td><?php the_field( 'port' ); ?></td>
								<td>
								<span class="orangeText new-price"><?php $current_price = (float)$price_sale; echo"$".number_format($current_price, 2); ?></span>
									<span class="old-price"><?php $old_price = (float)$price;  echo"$".number_format($old_price, 2);  ?></span>
								</td>
								<td><?php the_field( 'available' ); ?></td>
								<td>
									<a href="<?php the_permalink(); ?>" class="btn--orange">Configure <i class="fas fa-arrow-right"></i></a>
								</td>
							</tr>
							<?php 
							endwhile; 
							wp_reset_postdata();
							endif; 
							?>
						</tbody>
					</table>
				</div>
				<div class="tab-pane fade" id="enterprise-server" role="tabpanel" aria-labelledby="enterprise-server-tab">
				<table class="table table-bordered">
						<thead>
							<tr>
								<th>Model</th>
								<th>CPU</th>
								<th>RAM</th>
								<th>RAID</th>
								<th>HDD</th>
								<th>LOCATION</th>
								<th>PORT</th>
								<th>PRICE</th>
								<th>AVAILABLE</th>
								<th>&nbsp;</th>
							</tr>
						</thead>
						<tbody>
						    <?php
							global $post;
							
							$enterprise_serv_query = array(
								'posts_per_page' => 10,
								'post_type'      => 'product',
								'tax_query' => array(
									array(
										'taxonomy' => 'product_cat',
										'field'    => 'slug',
										'terms'    => array('enterprise-servers'),
									)
								)
							);		
														
							$ent_server = new WP_Query($enterprise_serv_query);
							if ( $ent_server->have_posts() ) :
							while ( $ent_server->have_posts() ) : $ent_server->the_post(); 
							    $price = get_post_meta( get_the_ID(), '_regular_price', true);
								$price_sale = get_post_meta( get_the_ID(), '_sale_price', true);
							?>									
							<tr>
								<td>
									<?php 
									$server_icon = get_template_directory_uri() . '/dist/assets/images/customer-support-2.png';
									$img_server_icon     = get_field( 'server_icon' );
									if ( ! empty( $img_server_icon ) ) {
										$server_icon = $img_server_icon['sizes']['mid_icon'];
									}
									if(!empty($server_icon)){ echo"<span class='logo-type'><img src='".$server_icon."'></span>"; }
									?>										
									<?php the_field( 'model' ); ?>
								</td>
								<td><?php the_title(); ?> <span class="orangeText"><?php the_field( 'server_ghz' ); ?></span></td>
								<td><?php the_field( 'ram' ); ?> <span class="orangeText">RAM</span></td>
								<td><?php the_field( 'raid' ); ?></td>
								<td><?php the_field( 'hdd' ); ?></td>
								<td><?php the_field( 'location' ); ?></td>
								<td><?php the_field( 'port' ); ?></td>
								<td>
								<span class="orangeText new-price"><?php $current_price = (float)$price_sale; echo"$".number_format($current_price, 2); ?></span>
									<span class="old-price"><?php $old_price = (float)$price;  echo"$".number_format($old_price, 2);  ?></span>
								</td>
								<td><?php the_field( 'available' ); ?></td>
								<td>
									<a href="<?php /* the_permalink();*/ ?>" class="btn--orange">Configure <i class="fas fa-arrow-right"></i></a>
								</td>
							</tr>
							<?php 
							endwhile; 
							wp_reset_postdata();
							endif; 
							?>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</section>

	<section class="ds-feature-compare section">
		<div class="wrapper">
			<div class="section-header u-txt-center">
				<h2 class="section-header__title"><?php the_field('budget_vs_pro_vs_enterprise_title'); ?></h2>
				<span class="section-header__decoration-element"></span>
			</div>
			<div class="ds-feature-table">
				<div class="ds-feature-table__block">
					<div class="ds-feature-table__block--header">&nbsp;</div>
					<div class="ds-feature-table__block--content">
						<ul>
							<?php							
							if ( have_rows( 'budget_vs_pro_vs_enterprise_comparison' ) ) : 
							while ( have_rows( 'budget_vs_pro_vs_enterprise_comparison' ) ) :
							the_row();						
							?>
							<li><?php the_sub_field('feature_heading');?> <?php if(!empty(get_sub_field('help_text'))){ ?> <i><img src="<?php echo get_template_directory_uri() . '/dist/assets/images/question.png'; ?>" alt="question"></i><?php  }?></li>							
							<?php 
							endwhile; 
							endif;			
							?>
						</ul>
					</div>
					<div class="ds-feature-table__block--footer">&nbsp;</div>
				</div>
				
				<div class="ds-feature-table__block">
					<div class="ds-feature-table__block--header">
						<div class="ds-feature-table-icon-box">
							<img src="<?php echo get_template_directory_uri() . '/dist/assets/images/servers.png'; ?>" alt="servers">
						</div>
						<h3>Budget Servers</h3>
						<h4>Prebuilt Servers</h4>
					</div>
					<div class="ds-feature-table__block--content">
						<ul>
							<?php						
							if ( have_rows( 'budget_vs_pro_vs_enterprise_comparison' ) ) : 
							while ( have_rows( 'budget_vs_pro_vs_enterprise_comparison' ) ) :
							the_row();	
							$yes_image = "<img src='".get_template_directory_uri(). "/dist/assets/images/tick-green.png' alt='tick-green' class='tick-green'>";
							$no_image = "<img src='".get_template_directory_uri(). "/dist/assets/images/cancel.png' alt='cancel' class='cancel'>";
							$yes_no_val = get_sub_field('budget_servers'); 
							$yes_no = explode(',',$yes_no_val);							
							?>
							<li> 
							<?php 
							if(is_array($yes_no) && count($yes_no)>1){
								foreach($yes_no as $row){
									if(strtolower($row) =='yes'){
										echo $yes_image;
									}
									else if(strtolower($row) =='no'){
										echo $no_image;
									}else{
										echo $row;	
									}
								}
							}else{
								if(strtolower($yes_no_val) =='yes'){
									echo $yes_image;
								}
								else if(strtolower($yes_no_val) =='no'){
									echo $no_image;
								}else{
									$result = !empty($yes_no_val)?$yes_no_val:'&nbsp;';
									echo $result;
								}
							} 							
							?>
							</li>							
							<?php 
							endwhile; 
							endif;			
							?>
						</ul>
					</div>
					<div class="ds-feature-table__block--footer">
						<?php 
						$budget_servers = get_field('budget_servers'); 
						?>
						<a href="<?php if(isset($budget_servers['view_server_link'])){ echo $budget_servers['view_server_link']; }?>" class="btn--orange"><?php if(isset($budget_servers['view_server_button_label'])){ echo $budget_servers['view_server_button_label']; }?></a>
						<a href="<?php if(isset($budget_servers['view_server_link'])){ echo $budget_servers['view_server_link']; }?>"><?php if(isset($budget_servers['configuration_available_text'])){ echo $budget_servers['configuration_available_text']; }?></a>
					</div>
				</div>
				<div class="ds-feature-table__block">
					<div class="ds-feature-table__block--header">
						<div class="ds-feature-table-icon-box">
							<img src="<?php echo get_template_directory_uri() . '/dist/assets/images/pro-server.png'; ?>" alt="pro-server">
						</div>
						<h3>Pro Servers</h3>
						<h4>Prebuilt Servers</h4>
					</div>
					<div class="ds-feature-table__block--content">
						<ul>
							<?php					
							if ( have_rows( 'budget_vs_pro_vs_enterprise_comparison' ) ) : 
							while ( have_rows( 'budget_vs_pro_vs_enterprise_comparison' ) ) :
							the_row();	
							$yes_image = "<img src='".get_template_directory_uri(). "/dist/assets/images/tick-green.png' alt='tick-green' class='tick-green'>";
							$no_image = "<img src='".get_template_directory_uri(). "/dist/assets/images/cancel.png' alt='cancel' class='cancel'>";
							$yes_no_val = get_sub_field('pro_servers'); 
							$yes_no = explode(',',$yes_no_val);							
							?>
							<li>
							<?php 
							if(is_array($yes_no) && count($yes_no)>1){
								foreach($yes_no as $row){
									if(strtolower($row) =='yes'){
										echo $yes_image;
									}
									else if(strtolower($row) =='no'){
										echo $no_image;
									}else{
										echo $row;	
									}
								}
							}else{
								if(strtolower($yes_no_val) =='yes'){
									echo $yes_image;
								}
								else if(strtolower($yes_no_val) =='no'){
									echo $no_image;
								}else{
									$result = !empty($yes_no_val)?$yes_no_val:'&nbsp;';
									echo $result;
								}
							} 							
							?>
							</li>							
							<?php 
							endwhile; 
							endif;			
							?>
						</ul>
					</div>
					<div class="ds-feature-table__block--footer">
						<?php 
						$pro_servers = get_field('pro_servers'); 
						?>
						<a href="<?php if(isset($pro_servers['view_server_link'])){ echo $pro_servers['view_server_link']; }?>" class="btn--orange"><?php if(isset($pro_servers['view_server_button_label'])){ echo $pro_servers['view_server_button_label']; }?></a>
						<a href="<?php if(isset($pro_servers['view_server_link'])){ echo $pro_servers['view_server_link']; }?>"><?php if(isset($pro_servers['configuration_available_text'])){ echo $pro_servers['configuration_available_text']; }?></a>
					</div>
				</div>
				<div class="ds-feature-table__block">
					<div class="ds-feature-table__block--header">
						<div class="ds-feature-table-icon-box">
							<img src="<?php echo get_template_directory_uri() . '/dist/assets/images/budget-server.png'; ?>" alt="budget-server">
						</div>
						<h3>Enterprise Servers</h3>
						<h4>Prebuilt Servers</h4>
					</div>
					<div class="ds-feature-table__block--content">
						<ul>
						<?php					
							if ( have_rows( 'budget_vs_pro_vs_enterprise_comparison' ) ) : 
							while ( have_rows( 'budget_vs_pro_vs_enterprise_comparison' ) ) :
							the_row();	
							$yes_image = "<img src='".get_template_directory_uri(). "/dist/assets/images/tick-green.png' alt='tick-green' class='tick-green'>";
							$no_image = "<img src='".get_template_directory_uri(). "/dist/assets/images/cancel.png' alt='cancel' class='cancel'>";
							$yes_no_val = get_sub_field('enterprise_servers'); 
							$yes_no = explode(',',$yes_no_val);							
							?>
							<li>
							<?php 
							if(is_array($yes_no) && count($yes_no)>1){
								foreach($yes_no as $row){
									if(strtolower($row) =='yes'){
										echo $yes_image;
									}
									else if(strtolower($row) =='no'){
										echo $no_image;
									}else{
										echo $row;	
									}
								}
							}else{
								if(strtolower($yes_no_val) =='yes'){
									echo $yes_image;
								}
								else if(strtolower($yes_no_val) =='no'){
									echo $no_image;
								}else{
									$result = !empty($yes_no_val)?$yes_no_val:'&nbsp;';
									echo $result;
								}
							} 							
							?>
							</li>							
							<?php 
							endwhile; 
							endif;			
							?>
						</ul>
					</div>
					<div class="ds-feature-table__block--footer">
					<?php 
						$enterprice_servers = get_field('enterprise_servers'); 
						?>
						<a href="<?php if(isset($enterprice_servers['view_server_link'])){ echo $enterprice_servers['view_server_link']; }?>" class="btn--orange"><?php if(isset($enterprice_servers['view_server_button_label'])){ echo $enterprice_servers['view_server_button_label']; }?></a>
						<a href="<?php if(isset($enterprice_servers['view_server_link'])){ echo $enterprice_servers['view_server_link']; }?>"><?php if(isset($enterprice_servers['configuration_available_text'])){ echo $enterprice_servers['configuration_available_text']; }?></a>
					</div>
				</div>
			</div>
		</div>
	</section>
<?php endwhile; // end of the loop. ?>
</main>
<?php get_footer(); ?>
