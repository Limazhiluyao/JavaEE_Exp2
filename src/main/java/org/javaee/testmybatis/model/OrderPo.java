package org.javaee.testmybatis.model;

import io.swagger.annotations.ApiModel;
import lombok.Data;
import org.apache.ibatis.type.Alias;

import java.util.Date;

@Data
@ApiModel(description = "订单持久化对象")
public class OrderPo {

    int id;

    int customer_id;

    int shop_id;

    String order_sn;

    int pid;

    String consignee;

    int region_id;

    String address;

    String mobile;

    String message;

    int order_type;

    int freight_price;

    int coupon_id;

    int coupon_activity_id;

    int discount_price;

    int origin_price;

    int presale_id;

    int groupon_discount;

    int rebate_num;

    Date confirm_time;

    String shipment_sn;

    int state;

    int substate;

    int be_deleted;

    Date gmt_create;

    Date gmt_modified;

    int groupon_id;

}
