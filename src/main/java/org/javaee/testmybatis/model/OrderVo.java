package org.javaee.testmybatis.model;


import io.swagger.annotations.ApiModel;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;


@Data
@ApiModel(description = "订单视图对象")
public class OrderVo {

    //按照前端传进来的新建订单的属性设计字段
    private String consignee;

    private int region_id;

    private String address;

    private String mobile;

    private String message;

    private int coupon_id;

    private int presale_id;

    private int groupon_id;
    

    private List<OrderItemVo> orderItems;

    public Order createOrder() {
        Order order = new Order();
        order.setConsignee(this.consignee);
        order.setRegion_id(this.region_id);
        order.setAddress(this.address);
        order.setMobile(this.mobile);
        order.setMessage(this.message);
        order.setCoupon_id(this.coupon_id);
        order.setPid(this.presale_id);
        order.setGroupon_id(this.groupon_id);

        if (orderItems != null) {
            List<OrderItem> orderItemList = new ArrayList<>(orderItems.size());
            for (OrderItemVo orderItemVo : orderItems)
                orderItemList.add(orderItemVo.createOrderItem());
            order.setOrderItemList(orderItemList);
        }

        return order;
    }
}
