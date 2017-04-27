<template>
    <div class="donate">
        <h1>How YOU can Help!</h1>
        <ul class="ways-to-donate">
            <li>Volunteer to assist in projects</li>
            <li>Make Lunches for the workers</li>
            <li>Help organize fundraisers</li>
            <li>Shop at AmazonSmile, select Volunteers Repairing Homes as your charity, and the AmazonSmile Foundation will donate 0.5% of the purchase price from your eligible purchases</li>
            <li>Make a donation via check or gift card for materials, make payable to: Volunteers Repairing Homes 4232 Worcester Drive Fairfax, VA 22032</li>
            <li>Donate easily through our PayPal. Click the PayPal image below to Donate!</li>
            <li>New! Look for us in the Combined Federal Campaign (CFC) National Capital Area Charity List, five digit code number is #44924. Use employer matching funds!</li>
        </ul>
        <div class="paypal">
            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                <input type="hidden" name="cmd" value="_s-xclick">
                <input type="hidden" name="hosted_button_id" value="935JZRAVTBAEN">
                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
                <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
            </form>
        </div>
        <span class="footer-note">Volunteers Repairing Homes is a 501(c)3 charitable organization, and a financial statement is available upon request from the Commonwealth of Virginia Office of Charitable and Regulatory Programs.</span>
    </div>
</template>

<style scoped>
h1{
    text-align: center;
}
li{
    padding: 10px 0px;
}
.footer-note{
    display: block;
    margin: auto;
    text-align: center;
}

.ways-to-donate{
    margin: 0px 75px;
    font-size: 24px;
}

.paypal{
    text-align: center;
    padding: 10px 0px;
}

.donate{

}

</style>