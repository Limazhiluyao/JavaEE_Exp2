package org.javaee.testmybatis.model;

import lombok.Data;


public class OrderItem implements VoObject {

    private OrderItemPo orderItemPo;

    public OrderItem(OrderItemPo orderItemPo) {
        this.orderItemPo = orderItemPo;
    }

    public OrderItemPo getOrderItemPo() {
        return orderItemPo;
    }


    /**
     * 创建Vo对象
     *
     * @return Vo对象
     */
    @Override
    public Object createVo() {
        return null;
    }

}
