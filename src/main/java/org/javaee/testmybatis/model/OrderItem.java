package org.javaee.testmybatis.model;


public class OrderItem implements VoObject {

    private OrderItemPo orderItemPo;

    public OrderItem() {
        this.orderItemPo = new OrderItemPo();
    }

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
