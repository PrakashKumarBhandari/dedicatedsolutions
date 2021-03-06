<?php
/**
 * Checkout Form
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/checkout/form-checkout.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce\Templates
 * @version 3.5.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}



// If checkout registration is disabled and not logged in, the user cannot checkout.
if ( ! $checkout->is_registration_enabled() && $checkout->is_registration_required() && ! is_user_logged_in() ) {
	echo esc_html( apply_filters( 'woocommerce_checkout_must_be_logged_in_message', __( 'You must be logged in to checkout.', 'woocommerce' ) ) );
	return;
}

?>
		<section class="ds-form-order-section">
		<form name="checkout" method="post" class="checkout woocommerce-checkout" action="<?php echo esc_url( wc_get_checkout_url() ); ?>" enctype="multipart/form-data">
			<div class="wrapper">
				<div class="row">	
				    <?php if ( $checkout->get_checkout_fields() ) : ?>			
					<div class="col-md-7">
						<div id="checkoutfield" >							
							<?php do_action( 'woocommerce_checkout_billing' ); ?>							
						</div>					
					</div>
					<?php do_action( 'woocommerce_checkout_after_customer_details' ); ?>
					
					<?php endif; ?>

					<div class="col-md-5">
						<?php do_action( 'woocommerce_checkout_before_order_review_heading' ); ?>
						
						<div class="ds-order-aside">
							<h2 class="section-header__title">Your order</h2>
							<?php do_action( 'woocommerce_checkout_before_order_review' ); ?>
							<?php do_action( 'woocommerce_checkout_order_review' ); ?>	
							<?php do_action( 'woocommerce_checkout_after_order_review' ); ?>						
						</div>
					</div>				
				</div>
			</div>
		</form>
		<?php do_action( 'woocommerce_after_checkout_form', $checkout ); ?>
		</section>
	</section>

	<section class="section">
		<section class="promotional-code-banner" style="background-image:url('<?php echo get_template_directory_uri() . '/dist/assets/images/promotinal-code-bg.jpg'; ?>')">
			<div class="wrapper">
				<div class="promotionl-code-content">
					<div class="section-header u-txt-center">
						<h2 class="section-header__title">Promotional Code</h2>
					</div>					
					<?php  do_action( 'woocommerce_before_checkout_form', $checkout );?>					
				</div>
			</div>
		</section>
	
		<section class="payment-system">
			<div class="container-fluid">
				<img src="<?php echo get_template_directory_uri() . '/dist/assets/images/pay-system-footer.png'; ?>" alt="pay-system-footer">
			</div>
		</section>
	</section>



<?php do_action( 'woocommerce_after_checkout_form', $checkout ); ?>
