package org.javaee.testmybatis.model;

import java.util.Date;

public class OrderItem {
    int id;

    int order_id;

    int goods_sku_id;

    int quantity;

    int price;

    int discount;

    String name;

    int coupon_activity_id;

    int be_share_id;

    Date gmt_create;

    Date gmt_modified;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getOrder_id() {
        return order_id;
    }

    public void setOrder_id(int order_id) {
        this.order_id = order_id;
    }

    public int getGoods_sku_id() {
        return goods_sku_id;
    }

    public void setGoods_sku_id(int goods_sku_id) {
        this.goods_sku_id = goods_sku_id;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public int getDiscount() {
        return discount;
    }

    public void setDiscount(int discount) {
        this.discount = discount;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getCoupon_activity_id() {
        return coupon_activity_id;
    }

    public void setCoupon_activity_id(int coupon_activity_id) {
        this.coupon_activity_id = coupon_activity_id;
    }

    public int getBe_share_id() {
        return be_share_id;
    }

    public void setBe_share_id(int be_share_id) {
        this.be_share_id = be_share_id;
    }

    public Date getGmt_create() {
        return gmt_create;
    }

    public void setGmt_create(Date gmt_create) {
        this.gmt_create = gmt_create;
    }

    public Date getGmt_modified() {
        return gmt_modified;
    }

    public void setGmt_modified(Date gmt_modified) {
        this.gmt_modified = gmt_modified;
    }
}
