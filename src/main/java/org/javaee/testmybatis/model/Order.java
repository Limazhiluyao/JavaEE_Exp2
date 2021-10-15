package org.javaee.testmybatis.model;


import java.util.*;


public class Order implements VoObject {

    private OrderPo orderPo;

    private List<OrderItem> orderItems;

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
        return orderItems;
    }

    public void setOrderItemList(List<OrderItem> orderItems) {
        this.orderItems = orderItems;
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
    public Object createVo() {
        ArrayList<HashMap<String, Object>> orderItemInfos = new ArrayList();
        for (OrderItem orderItem : this.orderItems)
            orderItemInfos.add(orderItem.createVo());


        HashMap<String, Object> retOrderInfo = new HashMap<>();
        retOrderInfo.put("id", orderPo.getId());
        retOrderInfo.put("orderSn", orderPo.getOrder_sn());
        retOrderInfo.put("pid", orderPo.getPid());
        retOrderInfo.put("orderType", orderPo.getOrder_type());
        retOrderInfo.put("state", orderPo.getState());
        retOrderInfo.put("subState", orderPo.getSubstate());
        retOrderInfo.put("gmtCreate", orderPo.getGmt_create());
        retOrderInfo.put("gmtModified", orderPo.getGmt_modified());
        retOrderInfo.put("confirmTime", orderPo.getConfirm_time());
        retOrderInfo.put("originPrice", orderPo.getOrigin_price());
        retOrderInfo.put("discountPrice", orderPo.getDiscount_price());
        retOrderInfo.put("freightPrice", orderPo.getFreight_price());
        retOrderInfo.put("rebateNum", orderPo.getRebate_num());
        retOrderInfo.put("message", orderPo.getMessage());
        retOrderInfo.put("regionId", orderPo.getRegion_id());
        retOrderInfo.put("address", orderPo.getAddress());
        retOrderInfo.put("mobile", orderPo.getMobile());
        retOrderInfo.put("consignee", orderPo.getConsignee());
        retOrderInfo.put("couponId", orderPo.getCoupon_id());
        retOrderInfo.put("grouponId", orderPo.getGroupon_id());
        retOrderInfo.put("presaleId", orderPo.getPresale_id());
        retOrderInfo.put("shipmentSn", orderPo.getShipment_sn());
        retOrderInfo.put("orderItems", orderItemInfos);

        return retOrderInfo;
    }


    public int getId() {
        return orderPo.getId();
    }

    public void setId(int id) {
        orderPo.setId(id);
    }

    public int getCustomer_id() {
        return orderPo.getCustomer_id();
    }

    public void setCustomer_id(int customer_id) {
        orderPo.setCustomer_id(customer_id);
    }

    public int getShop_id() {
        return orderPo.getShop_id();
    }

    public void setShop_id(int shop_id) {
        orderPo.setShop_id(shop_id);
    }

    public String getOrder_sn() {
        return orderPo.getOrder_sn();
    }

    public void setOrder_sn(String order_sn) {
        orderPo.setOrder_sn(order_sn);
    }

    public int getPid() {
        return orderPo.getPid();
    }

    public void setPid(int pid) {
        orderPo.setPid(pid);
    }

    public String getConsignee() {
        return orderPo.getConsignee();
    }

    public void setConsignee(String consignee) {
        orderPo.setConsignee(consignee);
    }

    public int getRegion_id() {
        return orderPo.getRegion_id();
    }

    public void setRegion_id(int region_id) {
        orderPo.setRegion_id(region_id);
    }

    public String getAddress() {
        return orderPo.getAddress();
    }

    public void setAddress(String address) {
        orderPo.setAddress(address);
    }

    public String getMobile() {
        return orderPo.getMobile();
    }

    public void setMobile(String mobile) {
        orderPo.setMobile(mobile);
    }

    public String getMessage() {
        return orderPo.getMessage();
    }

    public void setMessage(String message) {
        orderPo.setMessage(message);
    }

    public int getOrder_type() {
        return orderPo.getOrder_type();
    }

    public void setOrder_type(int order_type) {
        orderPo.setOrder_type(order_type);
    }

    public int getFreight_price() {
        return orderPo.getFreight_price();
    }

    public void setFreight_price(int freight_price) {
        orderPo.setFreight_price(freight_price);
    }

    public int getCoupon_id() {
        return orderPo.getCoupon_id();
    }

    public void setCoupon_id(int coupon_id) {
        orderPo.setCoupon_id(coupon_id);
    }

    public int getCoupon_activity_id() {
        return orderPo.getCoupon_activity_id();
    }

    public void setCoupon_activity_id(int coupon_activity_id) {
        orderPo.setCoupon_activity_id(coupon_activity_id);
    }

    public int getDiscount_price() {
        return orderPo.getDiscount_price();
    }

    public void setDiscount_price(int discount_price) {
        orderPo.setDiscount_price(discount_price);
    }

    public int getOrigin_price() {
        return orderPo.getOrigin_price();
    }

    public void setOrigin_price(int origin_price) {
        orderPo.setOrigin_price(origin_price);
    }

    public int getPresale_id() {
        return orderPo.getPresale_id();
    }

    public void setPresale_id(int presale_id) {
        orderPo.setPresale_id(presale_id);
    }

    public int getGroupon_discount() {
        return orderPo.getGroupon_discount();
    }

    public void setGroupon_discount(int groupon_discount) {
        orderPo.setGroupon_discount(groupon_discount);
    }

    public int getRebate_num() {
        return orderPo.getRebate_num();
    }

    public void setRebate_num(int rebate_num) {
        orderPo.setRebate_num(rebate_num);
    }

    public Date getConfirm_time() {
        return orderPo.getConfirm_time();
    }

    public void setConfirm_time(Date confirm_time) {
        orderPo.setConfirm_time(confirm_time);
    }

    public String getShipment_sn() {
        return orderPo.getShipment_sn();
    }

    public void setShipment_sn(String shipment_sn) {
        orderPo.setShipment_sn(shipment_sn);
    }

    public int getState() {
        return orderPo.getState();
    }

    public void setState(int state) {
        orderPo.setState(state);
    }

    public int getSubstate() {
        return orderPo.getSubstate();
    }

    public void setSubstate(int substate) {
        orderPo.setSubstate(substate);
    }

    public int getBe_deleted() {
        return orderPo.getBe_deleted();
    }

    public void setBe_deleted(int be_deleted) {
        orderPo.setBe_deleted(be_deleted);
    }

    public Date getGmt_create() {
        return orderPo.getGmt_create();
    }

    public void setGmt_create(Date gmt_create) {
        orderPo.setGmt_create(gmt_create);
    }

    public Date getGmt_modified() {
        return orderPo.getGmt_modified();
    }

    public void setGmt_modified(Date gmt_modified) {
        orderPo.setGmt_modified(gmt_modified);
    }

    public int getGroupon_id() {
        return orderPo.getGroupon_id();
    }

    public void setGroupon_id(int groupon_id) {
        orderPo.setGroupon_id(groupon_id);
    }

}
