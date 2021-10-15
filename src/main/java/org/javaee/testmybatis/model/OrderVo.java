package org.javaee.testmybatis.model;

import com.sun.org.apache.xpath.internal.operations.Or;
import io.swagger.annotations.ApiModel;
import lombok.Data;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;


@Data
@ApiModel(description = "订单视图对象")
public class OrderVo {

    //按照前端传进来的新建订单的属性设计字段
    
    private int id;

    private int customer_id;

    private int shop_id;

    private String order_sn;

    private int pid;

    private String consignee;

    private int region_id;

    private String address;

    private String mobile;

    private String message;

    private int order_type;

    private int freight_price;

    private int coupon_id;

    private int coupon_activity_id;

    private int discount_price;

    private int origin_price;

    private int presale_id;

    private int groupon_discount;

    private int rebate_num;

    private Date confirm_time;

    private String shipment_sn;

    private int state;

    private int substate;

    private int be_deleted;

    private Date gmt_create;

    private Date gmt_modified;

    private int groupon_id;

    private List<OrderItemVo> orderItemVoList;

    public Order createOrder() {
        Order order = new Order();
        List<OrderItem> orderItemList = new ArrayList<>(orderItemVoList.size());
        if (orderItemVoList != null)
            for (OrderItemVo orderItemVo : orderItemVoList)
                orderItemList.add(orderItemVo.createOrderItem());

        return order;
    }
}
