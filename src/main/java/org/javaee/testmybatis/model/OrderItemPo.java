package org.javaee.testmybatis.model;

import io.swagger.annotations.ApiModel;
import lombok.Data;

import java.util.Date;

@Data
@ApiModel(description = "订单明细持久化对象")
public class OrderItemPo {

    private int id;

    private int order_id;

    private int goods_sku_id;

    private int quantity;

    private int price;

    private int discount;

    private String name;

    private int coupon_activity_id;

    private int be_share_id;

    private Date gmt_create;

    private Date gmt_modified;


}
