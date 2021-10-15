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
    private String consignee;

    private int region_id;

    private String address;

    private String mobile;

    private String message;

    private int coupon_id;

    private int presale_id;

    private int groupon_id;

    private List<OrderItemVo> orderItemVoList;

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

        List<OrderItem> orderItemList = new ArrayList<>(orderItemVoList.size());
        if (orderItemVoList != null)
            for (OrderItemVo orderItemVo : orderItemVoList)
                orderItemList.add(orderItemVo.createOrderItem());

        order.setOrderItemList(orderItemList);
        return order;
    }
}
