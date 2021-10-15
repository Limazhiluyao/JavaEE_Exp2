package org.javaee.testmybatis.model;


import java.util.List;
import java.util.Map;


public class Order implements VoObject {

    private OrderPo orderPo;

    private List<OrderItem> orderItemList;

    public Order() {
        this.orderPo = new OrderPo();
    }

    public Order(OrderPo orderPo) {
        this.orderPo = orderPo;
    }

    public OrderPo getOrderPo() {
        return orderPo;
    }

    public List<OrderItem> getOrderItemList() {
        return orderItemList;
    }

    public void setOrderItemList(List<OrderItem> orderItemList) {
        this.orderItemList = orderItemList;
    }

    public void setOrderPo(OrderPo orderPo) {
        this.orderPo = orderPo;
    }

    /**
     * 创建Vo对象
     *
     * @return Vo对象
     */
    @Override
    public VoObject createVo() {
        return null;
    }

}
