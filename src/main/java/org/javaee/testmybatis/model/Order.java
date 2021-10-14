package org.javaee.testmybatis.model;

import com.sun.org.apache.xpath.internal.operations.Or;

import java.util.Map;

public class Order implements VoObject {

    private OrderPo orderPo;

    public Order(OrderPo orderPo) {
        this.orderPo = orderPo;
    }

    public OrderPo getOrderPo() {
        return orderPo;
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
