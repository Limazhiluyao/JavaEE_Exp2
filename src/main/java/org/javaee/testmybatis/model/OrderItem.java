package org.javaee.testmybatis.model;


import java.util.Date;
import java.util.HashMap;

public class OrderItem implements VoObject {

    private OrderItemPo orderItemPo;

    public OrderItem() {
        this.orderItemPo = new OrderItemPo();
    }

    public OrderItem(OrderItemPo orderItemPo) {
        this.orderItemPo = orderItemPo;
    }

    public OrderItemPo getOrderItemPo() {
        return orderItemPo;
    }

    public int getId() {
        return orderItemPo.getId();
    }

    public void setId(int id) {
        orderItemPo.setId(id);
    }

    public int getOrder_id() {
        return orderItemPo.getOrder_id();
    }

    public void setOrder_id(int order_id) {
        orderItemPo.setOrder_id(order_id);
    }

    public int getGoods_sku_id() {
        return orderItemPo.getGoods_sku_id();
    }

    public void setGoods_sku_id(int goods_sku_id) {
        orderItemPo.setGoods_sku_id(goods_sku_id);
    }

    public int getQuantity() {
        return orderItemPo.getQuantity();
    }

    public void setQuantity(int quantity) {
        orderItemPo.setQuantity(quantity);
    }

    public int getPrice() {
        return orderItemPo.getPrice();
    }

    public void setPrice(int price) {
        orderItemPo.setPrice(price);
    }

    public int getDiscount() {
        return orderItemPo.getDiscount();
    }

    public void setDiscount(int discount) {
        orderItemPo.setDiscount(discount);
    }

    public String getName() {
        return orderItemPo.getName();
    }

    public void setName(String name) {
        orderItemPo.setName(name);
    }

    public int getCoupon_activity_id() {
        return orderItemPo.getCoupon_activity_id();
    }

    public void setCoupon_activity_id(int coupon_activity_id) {
        orderItemPo.setCoupon_activity_id(coupon_activity_id);
    }

    public int getBe_share_id() {
        return orderItemPo.getBe_share_id();
    }

    public void setBe_share_id(int be_share_id) {
        orderItemPo.setBe_share_id(be_share_id);
    }

    public Date getGmt_create() {
        return orderItemPo.getGmt_create();
    }

    public void setGmt_create(Date gmt_create) {
        orderItemPo.setGmt_create(gmt_create);
    }

    public Date getGmt_modified() {
        return orderItemPo.getGmt_modified();
    }

    public void setGmt_modified(Date gmt_modified) {
        orderItemPo.setGmt_modified(gmt_modified);
    }

    /**
     * 创建Vo对象
     *
     * @return Vo对象
     */
    @Override
    public HashMap<String, Object> createVo() {
        HashMap<String, Object> orderItemInfo = new HashMap<>();
        orderItemInfo.put("skuId", this.getGoods_sku_id());
        orderItemInfo.put("orderId", this.getOrder_id());
        orderItemInfo.put("name", this.getName());
        orderItemInfo.put("quantity", this.getQuantity());
        orderItemInfo.put("price", this.getPrice());
        orderItemInfo.put("discount", this.getDiscount());
        orderItemInfo.put("couponActId", this.getCoupon_activity_id());
        orderItemInfo.put("beSharedId", this.getBe_share_id());

        return orderItemInfo;
    }

}
