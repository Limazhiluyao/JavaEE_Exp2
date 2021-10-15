package org.javaee.testmybatis.model;


import io.swagger.annotations.ApiModel;
import lombok.Data;

@Data
@ApiModel(description = "订单明细视图对象")
public class OrderItemVo {

    //按照前端传进来的新建订单的属性设计字段
    private int skuId;

    private int quantity;
    
    private int couponActId;

    public OrderItem createOrderItem() {
        OrderItem orderItem = new OrderItem();
        orderItem.setGoods_sku_id(this.skuId);
        orderItem.setQuantity(this.quantity);
        orderItem.setCoupon_activity_id(this.couponActId);
        return orderItem;
    }

}
