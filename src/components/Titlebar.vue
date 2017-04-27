<template>
<div class="titlebar">
    <div class="header-img">
        <img src="../assets/VRHLogo.png" alt="vrh-logo"/>
    </div>
    <div class="title-text">
        Volunteers Repairing Homes
    </div>
    <div class="paypal">
        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
            <input type="hidden" name="cmd" value="_s-xclick">
            <input type="hidden" name="hosted_button_id" value="935JZRAVTBAEN">
            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
            <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
        </form>
    </div>
</div>
</template>

<style scoped>
.titlebar{

}
.title-text{
    display: block;
    font-size: 32px;
    font-weight: bold;
    margin: 10px auto;
    text-align: center;
}
.header-img{
    position: absolute;
    display: inline;
    left: 20px;
    top: 20px;
}
.paypal{
    display: inline;
    position: absolute;
    right: 20px;
    top: 40px;
}
</style>