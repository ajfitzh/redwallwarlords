# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_02_19_021215) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "comments", force: :cascade do |t|
    t.string "text"
    t.integer "user_id"
    t.integer "post_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "posts", force: :cascade do |t|
    t.string "content"
    t.string "title"
    t.integer "user_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "tags", force: :cascade do |t|
    t.string "name"
    t.integer "blog_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "email"
    t.string "password_digest"
    t.string "avatar_url"
    t.string "bio"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "warlords", force: :cascade do |t|
    t.integer "ttrn_borders"
    t.integer "ttrn_police"
    t.integer "ttrn_guards"
    t.integer "ttrn_leaders"
    t.integer "revives"
    t.integer "markettime"
    t.integer "newstime"
    t.integer "msgtime"
    t.integer "aidcred"
    t.integer "bmperwatertrp"
    t.integer "bmperflytrp"
    t.integer "bmperlndtrp"
    t.integer "bmperarmtrp"
    t.integer "pmkt_food"
    t.integer "pmkt_watertrp"
    t.integer "pmkt_flytrp"
    t.integer "pmkt_lndtrp"
    t.integer "pmkt_armtrp"
    t.integer "loan"
    t.integer "savings"
    t.integer "tax"
    t.integer "freeland"
    t.integer "towers"
    t.integer "farms"
    t.integer "labs"
    t.integer "barracks"
    t.integer "industry"
    t.integer "homes"
    t.integer "shop"
    t.integer "land"
    t.integer "ind_watertrp"
    t.integer "ind_flytrp"
    t.integer "ind_lndtrp"
    t.integer "ind_armtrp"
    t.integer "gate"
    t.integer "shield"
    t.integer "runes"
    t.integer "wizards"
    t.integer "health"
    t.integer "watertrp"
    t.integer "flytrp"
    t.integer "ldntrp"
    t.integer "armtrp"
    t.integer "peasants"
    t.integer "food"
    t.integer "cash"
    t.integer "networth"
    t.integer "turnsused"
    t.integer "turnsstored"
    t.integer "turns"
    t.integer "kills"
    t.integer "deftotal"
    t.integer "defsucc"
    t.integer "offtotal"
    t.integer "offsucc"
    t.integer "attacks"
    t.boolean "forces"
    t.integer "clantime"
    t.integer "allytime"
    t.integer "clan_status"
    t.integer "clan_request"
    t.integer "clan_id"
    t.integer "rank"
    t.string "notice"
    t.integer "location_id"
    t.integer "race_id"
    t.string "warlord_name"
    t.boolean "validated"
    t.boolean "online"
    t.boolean "vacation"
    t.string "style"
    t.boolean "atkcondense"
    t.integer "race_change"
    t.boolean "free_revolt"
    t.integer "show_taxloot"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
