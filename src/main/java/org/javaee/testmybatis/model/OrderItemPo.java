package org.javaee.testmybatis.model;

import lombok.Data;

import java.util.Date;

@Data
public class OrderItemPo {
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

}
